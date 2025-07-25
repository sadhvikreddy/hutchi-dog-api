import { CreateBreedRepository } from "@/application/data/contracts/create/create-breed-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class CreateBreedUsecase implements CreateBreedRepository {
    constructor (
        private readonly database: DatabaseAdapter<Dog>
    ) {}

   async  execute(name: string, variants?: string[]): Promise<Dog | null> {
        const data: Partial<Dog> = {
            variants: variants ?? []
        }
        return await this.database.upsert(name, data);
    }
}