import Dog from "@/application/data/interfaces/db/dog"

export default interface ReadOneRepository {
    execute(name: string): Promise<Dog | null>
}