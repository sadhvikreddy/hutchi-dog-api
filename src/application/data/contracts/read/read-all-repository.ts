import Dog from "@/application/data/interfaces/db/dog"

export default interface ReadAllRepository {
    execute(): Promise<Dog[]>
}