import UpsertBreedController from "@/application/controllers/create/upsert-breed-controller";
import Dog from "@/application/data/interfaces/db/dog";
import UpsertBreedUsecase from "@/application/domain/create/create-breed-usecase";
import DatabaseAdapter from "@/infra/database-adapter";
import { restAPIAdapter } from "@/infra/rest-api-adapter";

export function upsertBreedRouter() {
    // Future enhancement maybe, idk have to see if i can get collection name from Type T.
    // but for sure. need to declare constansts. cant have string literals for the collection name. a typo would break the database
    const database = new DatabaseAdapter<Dog>('dogs')
    const usecase = new UpsertBreedUsecase(database)
    const controller = new UpsertBreedController(usecase);

    return restAPIAdapter(controller);
}