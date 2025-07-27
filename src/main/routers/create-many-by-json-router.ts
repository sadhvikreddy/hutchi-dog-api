import CreateManyByJsonController from "@/application/controllers/create/create-many-by-json-controller";
import CreateManyByJSONUsecase from "@/application/domain/create/create-many-by-json-usecase";
import { restAPIAdapter } from "@/infra/rest-api-adapter";
import { dogDatabaseFactory } from "../setup/database_factories";
import { CreateManyByJsonRequestInput } from "@/application/data/requests/create-many-by-json-request-input";

export function createManyByJsonRouter() {
    const usecase = new CreateManyByJSONUsecase(dogDatabaseFactory());
    const controller = new CreateManyByJsonController(usecase);

    return restAPIAdapter<CreateManyByJsonRequestInput>(controller);
}