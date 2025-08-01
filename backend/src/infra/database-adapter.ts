import BaseDocument from '@/application/data/interfaces/db/BaseDocument';
import db from '@/main/setup/setup_db';
import handleTimestamps from '@/main/utils/handleTimestamps';

export default class DatabaseAdapter<T extends BaseDocument> {

    collection: FirebaseFirestore.CollectionReference
    constructor (
        private readonly collectionName: string
    ) {
        this.collection = db.collection(this.collectionName);
    }

    // add values
    async upsert(id: string, data: Partial<T>): Promise<T | null> {
        id = id.toLowerCase();
        const document = await this.collection.doc(id).get();
        const oneRecord = document.data()
        let result;
        if(!oneRecord) {
            result = await this.collection.doc(id).set({
                id,
                created_at: new Date(),
                ...data
            });
        } else {
            result = await this.collection.doc(id).update({
                id,
                updated_at: new Date(),
                ...data
            })
        }
        return await this.readOne(id);
    }

    async upsertMany(data: T[]): Promise<any> {
        const promiseWrappers = data.map(entry => {
            return this.readOne(entry.id);
        })

        const results = await Promise.all(promiseWrappers);

        const toUpsert: any[] = [];
    
        for(let i = 0; i < results.length; i++) {
            const entry = data[i];
            const result = results[i];

            if(result === null) {
                // did this to discard created_at and updated_at if it is sent here
                const { created_at, updated_at, ...rest } = entry;
                const withTimestamps = {
                    created_at: new Date(),
                    ...rest
                }
                toUpsert.push(withTimestamps);
            } else {
                // Blindly updating now, even if the entries are same, can update this to be full featured differece checker later.
                const { updated_at, created_at, ...rest } = entry;
                const old_created_at = result['created_at'];
                const withTimestamps = {
                    created_at: old_created_at,
                    updated_at: new Date(),
                    ...rest
                }
                toUpsert.push(withTimestamps)
            }
        }

        const batch = db.batch();
        for(const entry of toUpsert) {
            const { id, ...rest } = entry;
            const lowercaseId = id.toLowerCase()
            const ref = this.collection.doc(lowercaseId);
            batch.set(ref, {
                id: lowercaseId,
                ...rest
            })
        }

        await batch.commit();

        // returns snapshot of the list. 
        // but, in real world application this would be read by many ids.
        return await this.read();
    }

    async read(): Promise<T[]> {
        const snapshot = await this.collection.orderBy('id', 'asc').get();
        const data: T[] =[]
        snapshot.forEach((doc) => {
            const record = handleTimestamps(doc.data()) as T;
            data.push(record)
        })
        return data;
    }

    async readOne(id: string): Promise<T | null> {
        const snapshot = await this.collection.doc(id).get();
        if(snapshot.exists) {
            const rawData = snapshot.data() as T;

            return handleTimestamps(rawData);
        } else {
            return null
        }
    }

    async deleteOne(id: string) {
        await this.collection.doc(id).delete()
        return true;
    }

    async deleteMany(ids: string[]) {
        const promiseWrappers = ids.map(id => this.collection.doc(id).delete())
        await Promise.all(promiseWrappers);
        return true;
    }
}