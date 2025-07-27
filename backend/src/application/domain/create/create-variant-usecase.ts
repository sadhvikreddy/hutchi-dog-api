import CreateVariantRepository from "@/application/data/contracts/create/create-variant-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class CreateVariantUsecase implements CreateVariantRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(name: string, variant: string): Promise<Dog | null> {
        const existingRecord = await this.database.readOne(name);

        const variants = existingRecord?.variants ?? []
        if(!variants.includes(variant)) {
            variants.push(variant);
        } else {
            return existingRecord as Dog
        }

        return await this.database.upsert(name, {variants});
    }
}