import Dog from "../../interfaces/db/dog";

export default interface CreateManyByJSONRepository {
    execute(json: Record<string, string[]>, reset?: boolean): Promise<Dog[]>
}