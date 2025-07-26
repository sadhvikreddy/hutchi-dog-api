export default interface CreateManyByJSONRepository {
    execute(json: Record<string, string[]>, reset?: boolean): Promise<boolean>
}