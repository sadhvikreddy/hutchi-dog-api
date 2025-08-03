import { DeleteVariantRepository } from "@/application/data/contracts/delete/delete-variant-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";
import { removeElementFromArray } from "@/main/utils/removeElementFromArray";

export default class DeleteVariantUsecase implements DeleteVariantRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(name: string, variant: string): Promise<Dog | null> {
        const existingRecord = await this.database.readOne(name.toLowerCase());
        if(existingRecord) {
            const variants = existingRecord.variants;

            if(variants.length > 0) {
                const newVariants = removeElementFromArray(variants, variant);

                const result = await this.database.upsert(name, {
                    variants: newVariants
                })

                return result
            }
        }

        return existingRecord;
    }
}