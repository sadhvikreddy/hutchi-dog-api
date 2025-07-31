"use client"

import Dog from "@/models/dog";
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";
import DeleteButton from "../buttons/delete-button";
import { useDogStore } from "@/store/dogStore";
import { addToast } from "@heroui/toast";
import SecondaryButton from "../buttons/secondary-button";


export default function ListItem({ dog }: { dog: Dog }) {
    const { deleteDogFROMRemote } = useDogStore()
    return <div className="flex flex-row items-center justify-between">
        <p className="text-sm md:text-lg font-light text-indigo-800">{capitalizeFirstLetter(dog.name)}</p>
        <div className="flex gap-2">
        <SecondaryButton
            tooltip="Add a variant to the Breed"
            onPress={() => {}}
        />
        <DeleteButton 
        tooltip={`Caution! this removes the breed: ${dog.name}. Cannot undo this.`}
        onPress={async (e) => {
            const added = await deleteDogFROMRemote(dog.id);
            if(added) {
                addToast({
                    title: "BOW! That Worked!",
                    description: `Deleted ${dog.name} from JSON.`,
                    color: 'success',
                    
                });
            } else {
                addToast({
                    title: "Oops, something failed while saving.",
                    description: ` Please try again`,
                    color: 'danger',
                });
            }
        }} />
        </div>
    </div>
}