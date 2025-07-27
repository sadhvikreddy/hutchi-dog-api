import DeleteVariantUsecase from "@/application/domain/delete/delete-variant-usecase";
import { dogDatabaseFactory } from "../setup/database_factories";
import DeleteVariantController from "@/application/controllers/delete/delete-variant-controller";
import { restAPIAdapter } from "@/infra/rest-api-adapter";
import { CreateAndDeleteVariantRequestInput } from "@/application/data/requests/create-variant-request-input";

export function deleteVariantRouter() {
    const usecase = new DeleteVariantUsecase(dogDatabaseFactory());
    const controller = new DeleteVariantController(usecase);

    return restAPIAdapter<CreateAndDeleteVariantRequestInput>(controller);
}