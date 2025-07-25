import CreateManyByJSONRepository from "@/application/data/contracts/create/create-many-by-json-repository";
import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";

export default class CreateManyByJSONUsecase implements CreateManyByJSONRepository {
    constructor(
        private readonly database: DatabaseAdapter<Dog>
    ) {}

    async execute(json: Record<string, string[]>): Promise<boolean> {
        const keys = Object.keys(json);

        const dogs: Dog[] = keys.map(key => {
            const dog: Dog = {
                id: key,
                name: key,
                variants: json[key] ?? [] 
            }

            return dog
        });

        return await this.database.upsertMany(dogs);
    }
}