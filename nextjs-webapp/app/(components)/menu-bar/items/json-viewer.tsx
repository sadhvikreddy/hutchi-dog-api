"use client"

import { Drawer, DrawerBody, DrawerContent, DrawerHeader, useDisclosure } from "@heroui/react";
import PrimaryButton from "../../buttons/primary-button";
import CloseButton from "../../buttons/close-button";
import { useDogStore } from "@/store/dogStore";
import { JsonViewer } from '@textea/json-viewer'
import dogToJson from "@/app/utils/dogToJson";

export default function JSONViewerButton() {
    const { isOpen: isJVOpen, onOpen: onJVOpen, onOpenChange: onJVOpenChange, onClose } = useDisclosure();
    const { dogs } = useDogStore();

    return (
        <>
            <PrimaryButton
                tooltipText="View JSON"
                onPress={onJVOpen}
                label="JSON Viewer"
            />
            <Drawer
                isOpen={isJVOpen}
                onOpenChange={onJVOpenChange}
                closeButton={<CloseButton onPress={onClose} />}
                size="2xl"

            >
                <DrawerContent>
                    <DrawerHeader>
                        <p className="text-xl text-indigo-800">Dog Json</p>
                    </DrawerHeader>
                    <DrawerBody>
                        <JsonViewer
                            value={dogToJson(dogs)}
                            maxDisplayLength={10000}
                            collapseStringsAfterLength={10000}
                            displayComma={true}
                            displayDataTypes={false}
                            rootName={false}
                        />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>

    );
}