import Dog from "../../interfaces/db/dog";

export interface CreateBreedRepository {
    execute(name:string, variants?: string[]): Promise<Dog | null>
}