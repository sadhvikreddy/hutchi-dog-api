"use client"

import { useState } from "react"
import { Button } from "@heroui/button";
import { Drawer, DrawerContent, DrawerHeader, Input, useDisclosure } from "@heroui/react"
import { useDogStore } from "@/store/dogStore";

export default function Menubar() {
    // ABD -> Add Breed Drawer
    const {isOpen:isABDOpen, onOpen: onABDOpen, onOpenChange: onABDOpenChange} = useDisclosure();
    const [jSONViewerVisibility, setJSONViewerVisibility] = useState(false);
    const [breedName, setBreedName] = useState('');
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
                <Button
                    color="primary"
                    variant="ghost"
                    onPress={ () => onABDOpen()}
                >
                    <div>Add a breed</div>
                </Button>
                <div>Upload a JSON</div>
                <Button
                    color="primary"
                    variant="ghost"
                    onPress={downloadFile}
                >
                    <div>Download List as JSON</div>
                </Button>
            </div>
            <Drawer isOpen={isABDOpen} onOpenChange={onABDOpenChange}>
                <DrawerHeader>
                    <p className="text-xl">Add a New Dog Breed</p>
                </DrawerHeader>
                <DrawerContent>
                    <Input
                        onChange={(e) => setBreedName(e.target.value)}
                    />
                    <div className="h-10"/>
                    <Button 
                    >
                        <p>Done</p>
                    </Button>
                </DrawerContent>
            </Drawer>
        </>
    )
}