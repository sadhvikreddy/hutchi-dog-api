import { DeleteBreedRepository } from "@/application/data/contracts/delete/delete-breed-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class DeleteBreedUsecase implements DeleteBreedRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(name: string): Promise<boolean> {
        return await this.database.delete(name);
    }
}