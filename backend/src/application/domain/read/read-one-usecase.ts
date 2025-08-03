import ReadOneRepository from "@/application/data/contracts/read/read-one-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class ReadOneUsecase implements ReadOneRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(name: string): Promise<Dog | null> {
        return await this.database.readOne(name.toLowerCase());
    }
}