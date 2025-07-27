import ReadAllRepository from "@/application/data/contracts/read/read-all-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class ReadAllUsecase implements ReadAllRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(): Promise<Dog[]> {
        return await this.database.read()
    }
}