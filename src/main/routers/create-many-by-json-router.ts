import CreateManyByJsonController from "@/application/controllers/create/create-many-by-json-controller";
import Dog from "@/application/data/interfaces/db/dog";
import CreateManyByJSONUsecase from "@/application/domain/create/create-many-by-json-usecase";
import DatabaseAdapter from "@/infra/database-adapter";
import { restAPIAdapter } from "@/infra/rest-api-adapter";

export function createManyByJsonRouter() {
    const database = new DatabaseAdapter<Dog>('dogs');
    const usecase = new CreateManyByJSONUsecase(database);
    const controller = new CreateManyByJsonController(usecase);

    return restAPIAdapter(controller);
}