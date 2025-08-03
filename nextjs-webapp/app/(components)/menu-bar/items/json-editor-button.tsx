"use client"

import { useDisclosure } from "@heroui/react";
import PrimaryButton from "../../buttons/primary-button";
import JsonEditorDrawer from "./drawers/json-editor-drawer";

export default function JSONEditorButton() {
    const { isOpen: isJEOpen, onOpen: onJEOpen, onOpenChange: onJEOpenChange, onClose } = useDisclosure();

    return (
        <>
            <PrimaryButton
                tooltipText="View JSON"
                onPress={onJEOpen}
                label="JSON Editor"
            />
            <JsonEditorDrawer
                isJEOpen={isJEOpen}
                onJEOpenChange={onJEOpenChange}
                onClose={onClose}
            />
        </>

    );
}