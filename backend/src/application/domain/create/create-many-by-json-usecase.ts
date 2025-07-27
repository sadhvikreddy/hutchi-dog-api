import CreateManyByJSONRepository from "@/application/data/contracts/create/create-many-by-json-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";
import { cleanTheString } from "@/main/utils/cleanTheString";
import { parseArray } from "@/main/utils/parseArray";

export default class CreateManyByJSONUsecase implements CreateManyByJSONRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(json: Record<string, string[]>, reset?: boolean): Promise<Dog[]> {
        const keys = Object.keys(json);

        const dogs: Dog[] = keys.map(key => {
            const dog: Dog = {
                id: cleanTheString(key),
                name: cleanTheString(key),
                variants: parseArray(json[key]) ?? [] 
            }

            return dog
        });

        if (reset) {
            const allRecords = await this.database.read();
            const list = allRecords.map(oneRecord => oneRecord.id);
            const newRecords = dogs.map(dog => dog.id);

            const toDeleteIds = list.filter(i => !newRecords.includes(i))

            await this.database.deleteMany(toDeleteIds);
        }

        return await this.database.upsertMany(dogs);
    }
}