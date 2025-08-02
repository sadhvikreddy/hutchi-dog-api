"use client"

import { Divider } from "@heroui/react";
import AddBreed from "./items/add-breed";
import DownloadFileButton from "./items/download-file-button";
import JSONViewerButton from "./items/json-viewer";
import JSONEditorButton from "./items/json-editor";

export default function Menubar() {



    return (
        <>
            <div className="flex flex-col gap-2 justify-self-center">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                    <AddBreed />
                    <DownloadFileButton />
                    <JSONViewerButton />
                    <JSONEditorButton />
                </div>
                <div className="h-4" />
                <Divider />
            </div>

        </>
    )
}