import CreateBreedController from "@/application/controllers/create/create-breed-controller";
import Dog from "@/application/data/interfaces/db/dog";
import CreateBreedUsecase from "@/application/domain/create/create-breed-usecase";
import DatabaseAdapter from "@/infra/database-adapter";
import { restAPIAdapter } from "@/infra/rest-api-adapter";

export function createBreedRouter() {
    // Future enhancement maybe, idk have to see if i can get collection name from Type T.
    // but for sure. need to declare constansts. cant have string literals for the collection name. a typo would break the database
    const database = new DatabaseAdapter<Dog>('dogs')
    const usecase = new CreateBreedUsecase(database)
    const controller = new CreateBreedController(usecase);

    return restAPIAdapter(controller);
}