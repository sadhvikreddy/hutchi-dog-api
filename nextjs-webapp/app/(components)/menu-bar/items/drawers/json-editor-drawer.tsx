"use client"

import CloseButton from "@/app/(components)/buttons/close-button";
import PrimaryButton from "@/app/(components)/buttons/primary-button";
import failedToast from "@/app/(components)/notifications/failed-toast";
import { useDogStore } from "@/store/dogStore";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@heroui/drawer";
import { Spinner } from "@heroui/spinner";
import { useEffect, useState } from "react";

export default function JsonEditorDrawer({ isJEOpen, onJEOpenChange, onClose }) {
    const [jsonValue, setJsonValue] = useState('');
    const [loading, setLoading] = useState(true);

    const { populate, toJson, saveByJson } = useDogStore();

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            await populate()
            const initialData = toJson()
            setJsonValue(initialData)
            setLoading(false);
        }

        init();

    }, [isJEOpen])

    const onSave = async () => {
        if (loading) {
            return;
        }
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
                        {loading && <Spinner />

                        }
                        {!loading &&
                            <div
                                className="h-full w-full bg-red-50"
                            >
                                <textarea
                                    className="h-full w-full"
                                    value={jsonValue}
                                    onChange={(e) => setJsonValue(e.target.value)}
                                />
                            </div>
                        }
                    </DrawerBody>
                </DrawerContent>

            </Drawer>

        </>
    );
}