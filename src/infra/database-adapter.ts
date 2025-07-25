import db from '@/main/setup/setup_db';

export default class DatabaseAdapter {

    static variantKey = 'variants'

    collection: FirebaseFirestore.CollectionReference
    constructor (
        private readonly collectionName: string
    ) {
        this.collection = db.collection(this.collectionName);
    }

    // add values
    async create(name: string, data: any): Promise<boolean> {
        try {
            await this.collection.doc(name).set({
                name,
                [DatabaseAdapter.variantKey]: data
            });
            return true;
        } catch(e){
            // TODO: format the errors better
            // log errors based on deployment pipeline.
            return false
        }
    }

    async read() {
        const snapshot = await this.collection.get();
        const data: Record<string, string[]> = {}
        snapshot.forEach((doc) => {
            data[doc.id] = doc.data()[`${DatabaseAdapter.variantKey}`] ?? []
        })

        return data;
    }

    async readOne(name: string) {
        const snapshot = await this.collection.doc(name).get();
        const data: Record<string, string[]> = {}
        if(snapshot.exists) {
            const rawData = snapshot.data();
            if(rawData !== undefined) {
                data[rawData.name] =  rawData[`${DatabaseAdapter.variantKey}`] ?? []
            }
        }
        return data;
    }

    // TODO: need to create models and interfaces (add partial of model)
    async update(name: string, data: any) {
        await this.collection.doc(name).set({
            ...data
        })
    }

    async delete(name: string) {
        try {
            await this.collection.doc(name).delete()
            return true;
        } catch(e) {
            return false
        }
    }
}