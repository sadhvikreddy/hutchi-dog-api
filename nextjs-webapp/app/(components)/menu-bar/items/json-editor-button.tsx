"use client"

import { Drawer, DrawerBody, DrawerContent, DrawerHeader, Textarea, useDisclosure } from "@heroui/react";
import PrimaryButton from "../../buttons/primary-button";
import CloseButton from "../../buttons/close-button";
import { useDogStore } from "@/store/dogStore";
import { useEffect, useState } from "react";
import failedToast from "../../notifications/failed-toast";

export default function JSONEditorButton() {
    const { isOpen: isJEOpen, onOpen: onJEOpen, onOpenChange: onJEOpenChange, onClose } = useDisclosure();
    const { toJson, saveByJson } = useDogStore();
    const [jsonValue, setJsonValue] = useState<string>('')

    useEffect(() => {
        setTimeout(() => {
            setJsonValue(toJson())
        }, 2000)
    }, [])

    const onSave = async () => {
        try {
            const parsedJSON = JSON.parse(jsonValue);
        } catch (error) {
            failedToast("Couldn't Parse JSON.")
        }


        const res = await saveByJson(jsonValue)
        if (res) {
            onClose()
        }
    }

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
                        <div className="flex flex-row w-full justify-between items-center ">
                            <p className="text-2xl text-indigo-800">Edit Json</p>
                            <PrimaryButton
                                label="Save"
                                tooltipText="Save in Database"
                                onPress={onSave}
                            />
                        </div>
                    </DrawerHeader>
                    <DrawerBody>
                        <div
                            className="h-full w-full bg-red-50"
                        >
                            <textarea
                                className="h-full w-full"
                                value={jsonValue}
                                onChange={(e) => setJsonValue(e.target.value)}
                            />
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>

    );
}