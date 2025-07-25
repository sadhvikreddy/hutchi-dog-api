import BaseDocument from '@/application/data/interfaces/db/BaseDocument';
import db from '@/main/setup/setup_db';

export default class DatabaseAdapter<T extends BaseDocument> {

    collection: FirebaseFirestore.CollectionReference
    constructor (
        private readonly collectionName: string
    ) {
        this.collection = db.collection(this.collectionName);
    }

    // add values
    async upsert(id: string, data: Partial<T>): Promise<T> {
            const document = await this.collection.doc(id).get();
            let result;
            if(!document) {
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
            return result as unknown as T
    }

    async upsertMany(data: T[]): Promise<any> {
        const promiseWrappers = data.map(entry => {
            return this.readOne(entry.id);
        })

        const results = await Promise.all(promiseWrappers);

        const toUpsert = [];
    
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
            const ref = this.collection.doc(id);
            batch.set(ref, {
                id,
                ...rest
            })
        }

        await batch.commit();

        // return actually status later.
        return true
    }

    async read(): Promise<Partial<T>[]> {
        const snapshot = await this.collection.get();
        const data: T[] =[]
        snapshot.forEach((doc) => {
            const record = doc.data() as T;
            data.push(record)
        })

        return data;
    }

    async readOne(id: string): Promise<Partial<T> | null> {
        const snapshot = await this.collection.doc(id).get();
        if(snapshot.exists) {
            const rawData = snapshot.data() as T;
            return rawData;
        } else {
            return null
        }
    }

    async delete(id: string) {
        await this.collection.doc(id).delete()
        return true;
    }
}