import { UpsertBreedRepository } from "@/application/data/contracts/create/upsert-breed-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class UpsertBreedUsecase implements UpsertBreedRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) { }

    async execute(name: string, variants?: string[]): Promise<Dog | null> {
        const data: Partial<Dog> = {
            name,
            variants: variants ?? []
        }
        return await this.database.upsert(name, data);
    }
}