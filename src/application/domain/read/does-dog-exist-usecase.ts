import { DoesDogExistRepository } from "@/application/data/contracts/read/does-dog-exist-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class DoesDogExistUsecase implements DoesDogExistRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(name: string): Promise<boolean> {
        const record = await this.database.readOne(name);
        if(record) {
            return record.name === name;
        } else {
            return false;
        }
    }
}