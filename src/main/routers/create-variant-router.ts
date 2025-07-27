import CreateVariantController from "@/application/controllers/create/create-variant-controller";
import { CreateAndDeleteVariantRequestInput } from "@/application/data/requests/create-variant-request-input";
import CreateVariantUsecase from "@/application/domain/create/create-variant-usecase";
import { restAPIAdapter } from "@/infra/rest-api-adapter";
import { dogDatabaseFactory } from "../setup/database_factories";

export function createVariantRouter() {
    const usecase = new CreateVariantUsecase(dogDatabaseFactory());
    const controller = new CreateVariantController(usecase);

    return restAPIAdapter<CreateAndDeleteVariantRequestInput>(controller)
}