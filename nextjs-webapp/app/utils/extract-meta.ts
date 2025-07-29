import Dog from "@/models/dog";
import DogWithMeta from "@/models/dog-with-meta";
import { KnowledgeGraphResponse } from "@/models/knowledge-graph-response";

export function extractMeta(dog: Dog, knowledgeGraphResponse: KnowledgeGraphResponse): DogWithMeta {
    const toReturn: DogWithMeta = {
        ...dog,
        imageUrl: '',
        detailedDescription: '',
        learnMoreUrl: `http://www.google.com/search?q=${dog.name}`
    }
    if(knowledgeGraphResponse) {
        const knowledgeGrpahList = knowledgeGraphResponse.itemListElement;

        const results = knowledgeGrpahList.map(element => element.result);
        const identifyDogBreed = results.find(item => {
            return item.description === "Dog breed"})
        if(identifyDogBreed) {
            toReturn['imageUrl'] = identifyDogBreed.image?.contentUrl;
            toReturn['detailedDescription'] = identifyDogBreed.detailedDescription?.articleBody ?? ""
            toReturn['learnMoreUrl'] = identifyDogBreed.image?.url ?? ''
        }
    }

    return toReturn;
}