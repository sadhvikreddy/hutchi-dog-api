import createData from '@/app/actions/dogs-api/create-data';
import deleteData from '@/app/actions/dogs-api/delete-data';
import fetchData from '@/app/actions/dogs-api/read-data'
import { addVariantData, deleteVariantData } from '@/app/actions/dogs-api/update-data';
import dogToJson from '@/app/utils/dogToJson';
import Dog from '@/models/dog'
import { create } from 'zustand'

type State = {
    dogs: Dog[];
}

type Action = {
    populate: () => Promise<void>
    toJson: () => string
    fromJson: (json: Record<string, string[]>) => void
    addDog: (dog: Dog) => void
    deleteDog: (id: string) => void
    updateDog: (Dog: Dog) => void

    addDogToRemote: (name: string, variants?: string[]) => Promise<boolean>
    updateDogWithVariant: (name: string, variant: string) => Promise<boolean>
    deleteDogFROMRemote: (name: string) => Promise<boolean>
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
        },
        fromJson: (json: Record<string, string[]>) => {
            
        },
        addDog: (dog: Dog) => {
            const { dogs: oldDogs } = get() 
            const dogs = [dog, ...oldDogs]
            set({ dogs })
        },
        deleteDog: (id: string) => {
            const { dogs } = get()
            const thisItem = dogs.filter(dog => dog.id !== id);
            set({ dogs: thisItem })
        },
        updateDog:(dog: Dog) => {
            const { dogs } = get()
            const updatedDogs = dogs.map((d) => {
                if(d.id === dog.id) {
                    return dog
                }
                return d;
            })

            set({ dogs: updatedDogs });
        },
        addDogToRemote: async (name: string, variants?: string[]) => {
            const response: Dog = await createData(name, variants);
            if(response) {
                const { addDog } = get()
                addDog(response)
                return true
            } else {
                return false
            }
        },
        updateDogWithVariant: async (name: string, variant: string) => {
            const response = await addVariantData(name, variant);
            if(response) {
                const { updateDog } = get()
                updateDog(response)
                return true;
            }
            return false
        },
        deleteDogFROMRemote: async (id: string) => {
            const splitted = id.split('_');
            if(splitted.length === 2) {
                const name = splitted[1]
                const variant = splitted[0]
                const response: Dog = await deleteVariantData(name, variant);
                if(response) {
                    const {updateDog} = get()
                    updateDog(response)
                    return true;
                } else {
                    return false;
                }
            } else {
                const response: boolean = await deleteData(id);
                if(response) {
                    const { deleteDog } = get()
                    deleteDog(id);
                    return true;
                } else {
                    console.log("Here");
                    return false;
                }
            }
        },
    })
)