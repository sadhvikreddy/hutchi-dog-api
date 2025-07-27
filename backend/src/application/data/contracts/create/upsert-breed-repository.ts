import Dog from "../../interfaces/db/dog";

export interface UpsertBreedRepository {
    execute(name: string, variants?: string[]): Promise<Dog | null>
}