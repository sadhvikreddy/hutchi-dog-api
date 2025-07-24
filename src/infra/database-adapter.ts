import db from '@/main/setup/setup_db';

export default class DatabaseAdapter {

    static variantKey = 'variants'

    collection: FirebaseFirestore.CollectionReference
    constructor (
        private readonly collectionName: string
    ) {
        this.collection = db.collection(this.collectionName);
    }

    async create(name: string): Promise<boolean> {
        try {
            await this.collection.doc(name).set({
                name,
                [DatabaseAdapter.variantKey]: []
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

    // TODO: need to create models and interfaces
    async update(name: string, data: any) {
    }


}