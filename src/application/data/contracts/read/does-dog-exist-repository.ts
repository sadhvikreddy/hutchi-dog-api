export interface DoesDogExistRepository {
    execute (name: string): Promise<boolean>
}