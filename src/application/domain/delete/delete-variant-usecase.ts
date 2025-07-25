import { DeleteVariantRepository } from "@/application/data/contracts/delete/delete-variant-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class DeleteVariantUsecase implements DeleteVariantRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(name: string, variant: string): Promise<boolean> {
        const existingRecord = await this.database.readOne(name);
        let toReturn = false;

        if(existingRecord) {
            const variants = existingRecord.variants;
            const indexOfDelete = variants.indexOf(variant, 0);
            // index being -1 means variant is not found in the array
            if(indexOfDelete > -1) {
                const newVariants = variants.splice(indexOfDelete, 1);
                const deleted = await this.database.upsert(name, {variants: newVariants});
                if(deleted) {
                    // Success
                    toReturn = true
                } else {
                    toReturn = false
                }
            } else {
                // variant is not there.
                toReturn = true
            }
        } else {
            // breed itself is not there.
            toReturn = true
        }
        
        return toReturn;
    }
}