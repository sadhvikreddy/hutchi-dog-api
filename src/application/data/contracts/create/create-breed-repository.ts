export interface CreateBreedRepository {
    execute(name:string, variants?: string[]): Promise<boolean>
}