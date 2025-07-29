export interface KnowledgeGraphResponse {
    itemListElement: ItemListElement[]
}

export interface ItemListElement {
    result: SearchItem
}

export interface SearchItem {
    image: {
        "url": string,
        "contentUrl": string
    },
    description: string,
    name: string,
    detailedDescription: {
        "articleBody": string,
    }
}
