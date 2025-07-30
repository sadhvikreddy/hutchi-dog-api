"use client"

import { Divider } from "@heroui/react";
import AddBreed from "./items/add-breed";
import DownloadFileButton from "./items/download-file-button";

export default function Menubar() {



    return (
        <>
            <div className="flex flex-col gap-2 justify-self-center">
                <div className="flex flex-row gap-5">  
                <AddBreed />
                <DownloadFileButton />
            </div>
            <div className="h-10" />
                <Divider />
            <div className="h-10" />
            </div>

        </>
    )
}