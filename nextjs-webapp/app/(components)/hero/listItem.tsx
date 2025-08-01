"use client"

import Dog from "@/models/dog";
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";
import DeleteButton from "../buttons/delete-button";
import { useDogStore } from "@/store/dogStore";
import { addToast } from "@heroui/toast";
import SecondaryButton from "../buttons/secondary-button";
import { useDisclosure } from "@heroui/react";
import AddVariant from "./add-variant";
import successToast from "../notifications/success-toast";
import failedToast from "../notifications/failed-toast";


export function ListItem({ dog, type }: { dog: Dog, type?: "variant" }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
    const { deleteDogFROMRemote, } = useDogStore()

    const familyName = dog.id.split('_').length === 1 ? dog.id : dog.id.split('_')[1]

    return <>
        <ListItemUI
            name={dog.name}
            onDelete={async () => {
                await deleteDogFROMRemote(dog.id);
            }}
            onVariantAdd={type === 'variant' ? null : onOpen}
        />

        <AddVariant
            name={familyName}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            onClose={onClose}
        />
    </>
}

export function ListItemUI({ name, onDelete, onVariantAdd }: { name: string, onDelete: any, onVariantAdd?: any }) {
    return (
        <div className="flex flex-row items-center justify-between">
            <p className="text-sm md:text-lg font-light text-indigo-800">{capitalizeFirstLetter(name)}</p>
            <div className="flex gap-2">
                {onVariantAdd !== null &&
                    <SecondaryButton
                        tooltip="Add a variant to the Breed"
                        onPress={onVariantAdd!}
                    />
                }
                <DeleteButton
                    tooltip={`Caution! this removes the breed: ${name}. Cannot undo this.`}
                    onPress={onDelete} />
            </div>
        </div>
    );
}