import DeleteBreedUsecase from "@/application/domain/delete/delete-breed-usecase";
import { dogDatabaseFactory } from "../setup/database_factories";
import { DeleteBreedController } from "@/application/controllers/delete/delete-breed-controller";
import { restAPIAdapter } from "@/infra/rest-api-adapter";

export function deleteBreedRouter() {
    const usecase = new DeleteBreedUsecase(dogDatabaseFactory())
    const controller = new DeleteBreedController(usecase);

    return restAPIAdapter(controller);
}