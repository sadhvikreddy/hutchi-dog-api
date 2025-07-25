export default interface CreateManyByJSONRepository {
    execute(json: Record<string, string[]>): Promise<boolean>
}