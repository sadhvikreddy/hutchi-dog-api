"use client"

import { Button } from "@heroui/button";
import { Drawer, DrawerContent } from "@heroui/drawer";
import { useDisclosure, Image, Input } from "@heroui/react";
import { useState } from "react";

export default function AddBreed() {
    const {isOpen:isABDOpen, onOpen: onABDOpen, onOpenChange: onABDOpenChange} = useDisclosure();
        const [breedName, setBreedName] = useState('');
    return (
        <>
            <Button
                color="primary"
                variant="light"
                onPress={ () => onABDOpen()}
            >
                <div>Add a breed</div>
            </Button>
            <Drawer isOpen={isABDOpen} onOpenChange={onABDOpenChange}
            className="m-4"
            >
                <DrawerContent>
                    
                    <Image
                        className="relative h-full w-full top-0 left-0 "
                        src={'/backgrounds/image.png'}
                        alt=""
                        width={300}
                        height={300}
                    />
                    <p className="text-xl text-indigo-800">Add a New Dog Breed</p>
                    <div className="h-20"/>
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