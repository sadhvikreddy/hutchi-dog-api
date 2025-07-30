import fetchData from '@/app/actions/dogs-api/read-data'
import dogToJson from '@/app/utils/dogToJson';
import Dog from '@/models/dog'
import { create } from 'zustand'

type State = {
    dogs: Dog[];
}

type Action = {
    populate: () => Promise<void>
    toJson: () => string
}

export const useDogStore = create<State & Action>((set, get) => ({
        dogs: [],
        populate: async () => {
            const fromServer = await fetchData()
            set({dogs: fromServer })
        },
        toJson: () => {
            const { dogs } = get()
            return JSON.stringify(dogToJson(dogs), undefined, 2);
        } 
    })
)