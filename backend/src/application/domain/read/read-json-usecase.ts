import ReadJsonRepository from "@/application/data/contracts/read/read-json-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";
import dogToJson from "@/main/utils/dogToJson";

export default class ReadJsonUsecase implements ReadJsonRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog> 
    ) {
    }

    async execute(): Promise<Record<string, string[]>> {
        const data = await this.database.read();

        return dogToJson(data);
    }
}