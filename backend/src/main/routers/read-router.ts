import ReadOneUsecase from "@/application/domain/read/read-one-usecase";
import { dogDatabaseFactory } from "../setup/database_factories";
import ReadOneController from "@/application/controllers/read/read-one-controller";
import { restAPIAdapter } from "@/infra/rest-api-adapter";

export function readRouter() {
    const usecase = new ReadOneUsecase(dogDatabaseFactory())
    const controller = new ReadOneController(usecase);

    return restAPIAdapter(controller);
}