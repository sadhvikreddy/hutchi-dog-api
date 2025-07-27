export default interface ReadJsonRepository {
    execute(): Promise<Record<string, string[]>>
}