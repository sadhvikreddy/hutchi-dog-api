"use client"

import { useState } from "react"
import { Button } from "@heroui/button";
import { Drawer, DrawerContent, DrawerHeader, Input, useDisclosure } from "@heroui/react"
import { useDogStore } from "@/store/dogStore";
import Image from "next/image";
import AddBreed from "./items/add-breed";

export default function Menubar() {
    const {isOpen:isAJDOpen, onOpen: onAJDOpen, onOpenChange: onAJDOpenChange} = useDisclosure();

    const { toJson } = useDogStore()

    const downloadFile =() => {   
        const blob = new Blob([toJson()], { type: 'text/json' })
        const a = document.createElement('a');
        a.download = `dogs-${new Date().toISOString().replace(".", '-')}.json`
        a.href = window.URL.createObjectURL(blob);
        a.click()
        a.remove()
    }

    return (
        <>
            <div className="">
                <AddBreed />
                <Button
                    color="primary"
                    variant="light"
                    onPress={ () => onAJDOpen()}
                >
                    <div>JSON </div>
                </Button>
                <Button
                    color="primary"
                    variant="light"
                    onPress={downloadFile}
                >
                    <div>Download List as JSON</div>
                </Button>
            </div>


            <Drawer 
                isOpen={isAJDOpen} 
                onOpenChange={onAJDOpenChange}
                size="full"
                placement="bottom"

            >
                <DrawerHeader>
                    <p className="text-xl">JSON</p>
                </DrawerHeader>
                <DrawerContent>
                    JSON
                </DrawerContent>
            </Drawer>
        </>
    )
}