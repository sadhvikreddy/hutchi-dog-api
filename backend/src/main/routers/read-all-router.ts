import ReadAllUsecase from "@/application/domain/read/read-all-usecase";
import { dogDatabaseFactory } from "../setup/database_factories";
import ReadAllController from "@/application/controllers/read/read-all-controller";
import { restAPIAdapter } from "@/infra/rest-api-adapter";

export function readAllRouter() {
    const usecase = new ReadAllUsecase(dogDatabaseFactory());
    const controller = new ReadAllController(usecase);

    return restAPIAdapter(controller);
}