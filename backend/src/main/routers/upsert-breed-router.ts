import UpsertBreedController from "@/application/controllers/create/upsert-breed-controller";
import UpsertBreedUsecase from "@/application/domain/create/upsert-breed-usecase";
import { restAPIAdapter } from "@/infra/rest-api-adapter";
import { dogDatabaseFactory } from "../setup/database_factories";
import { UpsertBreedRequestInput } from "@/application/data/requests/upsert-breed-request-input";

export function upsertBreedRouter() {
    const usecase = new UpsertBreedUsecase(dogDatabaseFactory())
    const controller = new UpsertBreedController(usecase);

    return restAPIAdapter<UpsertBreedRequestInput>(controller);
}