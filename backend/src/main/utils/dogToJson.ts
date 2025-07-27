import Dog from "@/application/data/interfaces/db/dog";

export default function dogToJson(dogs: Dog[]): Record<string, string[]> {
    const toReturn: Record<string, string[]> = {}

    dogs.forEach(dog => {
        toReturn[dog.name] = dog.variants ?? []
    })

    return toReturn;
}