export interface DeleteBreedRepository {
    execute(name: string): Promise<boolean>
}