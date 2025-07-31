import { Drawer, DrawerBody, DrawerContent, Input, useDisclosure } from "@heroui/react";
import PrimaryButton from "../buttons/primary-button";
import { useState } from "react";
import { useDogStore } from "@/store/dogStore";

export default function AddVariant({name, isOpen, onOpenChange, onClose}:{name: string, isOpen: boolean, onOpenChange: () => void, onClose: () => void}) {
    const [variant, setVariant] = useState("")
    const { updateDogWithVariant } = useDogStore()

    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                <DrawerBody>
                    <Input
                        onChange={(e) => setVariant(e.target.value)}
                    />
                    <div className="h2" />
                    <PrimaryButton
                        onPress={async () => {
                            await updateDogWithVariant(name, variant);
                            onClose()
                        }}
                        label="Add Variant"
                        tooltipText=""
                    />

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}