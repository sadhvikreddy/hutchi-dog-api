import db from '@/main/setup/setup_db';

export default class DatabaseAdapter<T> {

    collection: FirebaseFirestore.CollectionReference
    constructor (
        private readonly collectionName: string
    ) {
        this.collection = db.collection(this.collectionName);
    }

    // add values
    async create(id: string, data: Partial<T>): Promise<boolean> {
        try {
            await this.collection.doc(id).set({
                id,
                ...data
            });
            return true;
        } catch(e){
            // TODO: format the errors better
            // log errors based on deployment pipeline.
            return false
        }
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

    // TODO: need to create models and interfaces (add partial of model)
    async update(id: string, data: Partial<T>): Promise<boolean> {
        try {
            await this.collection.doc(id).set({
                ...data
            });
            return true;
        } catch(e) {
            return false;
        }
    }

    async delete(id: string) {
        try {
            await this.collection.doc(id).delete()
            return true;
        } catch(e) {
            return false
        }
    }
}