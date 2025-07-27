import ReadJsonUsecase from "@/application/domain/read/read-json-usecase";
import { dogDatabaseFactory } from "../setup/database_factories";
import ReadJsonController from "@/application/controllers/read/read-json-controller";
import { restAPIAdapter } from "@/infra/rest-api-adapter";

export function readJsonRouter() {
    const usecase = new ReadJsonUsecase(dogDatabaseFactory())
    const controller = new ReadJsonController(usecase);

    return restAPIAdapter(controller);
}