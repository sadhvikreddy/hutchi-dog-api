"use client"
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@heroui/drawer";
import { useDisclosure, Image, Input, addToast } from "@heroui/react";
import { useState } from "react";
import { useDogStore } from "@/store/dogStore";
import PrimaryButton from "../../buttons/primary-button";
import CloseButton from "../../buttons/close-button";

export default function AddBreed() {
    const { isOpen: isABDOpen, onOpen: onABDOpen, onOpenChange: onABDOpenChange, onClose } = useDisclosure();
    const [breedName, setBreedName] = useState('');
    const { addDogToRemote } = useDogStore()
    return (
        <>
            <PrimaryButton
                tooltipText="Add Breed to Database with or without variants"
                onPress={onABDOpen} label="Add Breed" />
            <Drawer
                isOpen={isABDOpen}
                onOpenChange={onABDOpenChange}
                closeButton={<CloseButton onPress={onClose} />}
                className="pt-20"
            >
                <DrawerContent
                    className="p-10"
                >
                    <DrawerHeader>
                        <p className="text-xl text-indigo-800">Add a New Dog Breed</p>
                    </DrawerHeader>
                    <DrawerBody>
                        <div className="flex flex-col justify-center pt-10">
                            <Input
                                className="m-0 h-20"
                                onChange={(e) => setBreedName(e.target.value)}
                                placeholder="Enter name of the breed, eg: pug, beagle, doberman"
                                label="Name"
                                labelPlacement="outside"
                                validate={(value) => value.length > 0 ? true : "Enter something here.."}
                            />
                            <div className="h-10" />
                            <PrimaryButton
                                tooltipText="Peesists changes in the database"
                                onPress={async (e) => {
                                    if (breedName.length > 0) {
                                        const added = await addDogToRemote(breedName);
                                        if (added) {
                                            addToast({
                                                title: "BOW! That Worked!",
                                                description: `Added ${breedName} to the JSON.`,
                                                color: 'success',

                                            });
                                            onClose()
                                        } else {
                                            addToast({
                                                title: "Oops, something failed while saving.",
                                                description: ` Please try again`,
                                                color: 'danger',
                                            });
                                        }
                                    }
                                }}

                                label="Confirm"
                            />
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>
    )
}