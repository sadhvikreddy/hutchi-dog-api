import Dog from "./dog";

export default interface DogWithMeta extends Dog {
    imageUrl?: string,
    detailedDescription?: string,
    learnMoreUrl?: string,
}