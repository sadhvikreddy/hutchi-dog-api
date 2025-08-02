"use client"

import { Drawer, DrawerBody, DrawerContent, DrawerHeader, useDisclosure } from "@heroui/react";
import PrimaryButton from "../../buttons/primary-button";
import CloseButton from "../../buttons/close-button";
import { useDogStore } from "@/store/dogStore";

export default function JSONEditorButton() {
    const { isOpen: isJEOpen, onOpen: onJEOpen, onOpenChange: onJEOpenChange, onClose } = useDisclosure();
    const { dogs } = useDogStore();

    return (
        <>
            <PrimaryButton
                tooltipText="View JSON"
                onPress={onJEOpen}
                label="JSON Editor"
            />
            <Drawer
                isOpen={isJEOpen}
                onOpenChange={onJEOpenChange}
                closeButton={<CloseButton onPress={onClose} />}
                size="2xl"
            >
                <DrawerContent>
                    <DrawerHeader>
                        <p className="text-xl text-indigo-800">Edit Json</p>
                    </DrawerHeader>
                    <DrawerBody>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>

    );
}