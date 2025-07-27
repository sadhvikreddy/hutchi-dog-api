import Dog from "@/application/data/interfaces/db/dog";
import DatabaseAdapter from "@/infra/database-adapter";
import { DOGS_COLLECTION_NAME } from "@/main/utils/constants";

export function dogDatabaseFactory() {
    return new DatabaseAdapter<Dog>(DOGS_COLLECTION_NAME)
}