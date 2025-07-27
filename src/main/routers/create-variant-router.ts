import CreateVariantController from "@/application/controllers/create/create-variant-controller";
import Dog from "@/application/data/interfaces/db/dog";
import { CreateVariantRequestInput } from "@/application/data/requests/create-variant-request-input";
import CreateVariantUsecase from "@/application/domain/create/create-variant-usecase";
import DatabaseAdapter from "@/infra/database-adapter";
import { restAPIAdapter } from "@/infra/rest-api-adapter";

export function createVariantRouter() {
    const database = new DatabaseAdapter<Dog>('dogs');
    const usecase = new CreateVariantUsecase(database);
    const controller = new CreateVariantController(usecase);

    return restAPIAdapter<CreateVariantRequestInput>(controller)
}