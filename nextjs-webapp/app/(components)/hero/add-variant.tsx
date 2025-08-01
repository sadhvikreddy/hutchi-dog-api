import { Drawer, DrawerBody, DrawerContent, DrawerHeader, Input } from "@heroui/react";
import PrimaryButton from "../buttons/primary-button";
import { useState } from "react";
import { useDogStore } from "@/store/dogStore";

export default function AddVariant({name, isOpen, onOpenChange, onClose}:{name: string, isOpen: boolean, onOpenChange: () => void, onClose: () => void}) {
    const [variant, setVariant] = useState("")
    const { updateDogWithVariant } = useDogStore()

    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerHeader>
                        <p className="text-xl text-indigo-800">{`Add variant to family of ${name}`}</p>
                    </DrawerHeader>
                </DrawerHeader>
                <DrawerBody>
                    <Input
                        onChange={(e) => setVariant(e.target.value)}
                    />
                    <div className="h2" />
                    <PrimaryButton
                        onPress={async () => {
                            if(name === undefined || variant === undefined) {
                                return
                            }
                            await updateDogWithVariant(name, variant);
                            onClose()
                        }}
                        label="Add Variant"
                        tooltipText="Add Variant"
                    />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}