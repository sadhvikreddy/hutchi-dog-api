import BaseDocument, { FirestoreTime } from "@/application/data/interfaces/db/BaseDocument";

export default function handleTimestamps(anyMap: any) {
    const toReturn = {
        ...anyMap
    }
    const { created_at, updated_at } = anyMap
    if(created_at !== undefined && created_at !== null) {
        const newCreatedAt = new Date(Number((created_at as FirestoreTime)['_seconds']) * 1000)
        toReturn.created_at = newCreatedAt
    }

    if(updated_at !== undefined && updated_at !== null) {
        const newUpdatedAt = new Date(Number((updated_at as FirestoreTime)['_seconds']) * 1000)
        toReturn.updated_at = newUpdatedAt
    }

    return toReturn;
}