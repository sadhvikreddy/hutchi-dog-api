import Dog from "../../interfaces/db/dog";

export interface DeleteVariantRepository {
    execute(name: string, variant: string): Promise<Dog | null>
}