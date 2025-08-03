"use client"
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@heroui/drawer";
import { useDisclosure, Input, addToast, Form, Card } from "@heroui/react";
import { useEffect, useState } from "react";
import { useDogStore } from "@/store/dogStore";
import PrimaryButton from "../../buttons/primary-button";
import CloseButton from "../../buttons/close-button";
import SecondaryButton from "../../buttons/secondary-button";
import SubmitButton from "../../buttons/submit-button";
import ResetButton from "../../buttons/reset-button";
import { ListItemUI } from "../../hero/list-Item";
import { removeElementFromArray } from "@/app/utils/removeElementsFromArray";

export default function AddBreedButton() {
    const { isOpen: isABDOpen, onOpen: onABDOpen, onOpenChange: onABDOpenChange, onClose } = useDisclosure();
    const [breedName, setBreedName] = useState('');
    const [variants, setVariants] = useState<string[]>([]);
    const [currentVariant, setCurrentVariant] = useState('');
    const [isFormValid, setIsFormValid] = useState<boolean>(false)

    useEffect(() => {
        if (breedName.length > 0) {
            setIsFormValid(true)
            if (variants.length > 0) {
                const vEmptyString = variants.find(e => e.length === 0)

                if (vEmptyString) {
                    setIsFormValid(false)
                } else {
                    setIsFormValid(true)
                }
            }
        } else {
            setIsFormValid(false)
        }
    }, [breedName, variants])

    useEffect(() => {
        onReset()
    }, [])

    const { addDogToRemote } = useDogStore();

    const onReset = () => {
        setBreedName('')
        setVariants([])
        setCurrentVariant('')
        setIsFormValid(false)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (breedName.length > 0) {
            await addDogToRemote(breedName, variants);
        }

        onClose()
    }

    return (
        <>
            <PrimaryButton
                tooltipText="Add Breed to Database with or without variants"
                onPress={onABDOpen} label="Add Breed" />
            <Drawer
                isOpen={isABDOpen}
                onOpenChange={onABDOpenChange}
                closeButton={<CloseButton onPress={onClose} />}
                size="md"
                backdrop="blur"

            >
                <DrawerContent
                >
                    <DrawerHeader>
                        <p className="text-xl text-indigo-800">Add a New Dog Breed</p>
                    </DrawerHeader>
                    <DrawerBody>
                        <Form
                            onSubmit={onSubmit} onReset={onReset}
                        >
                            <div className="flex flex-col justify-center w-full gap-y-4">
                                <Input
                                    className="h-20"
                                    onChange={(e) => {
                                        setBreedName(e.target.value)
                                    }}
                                    placeholder="Enter name of the breed, eg: pug, beagle, doberman"
                                    validate={(value) => value.length > 0 ? true : "Enter something here.."}
                                />

                                {breedName.length > 0 && <div>
                                    <p className="text-xl text-indigo-800">Add Variants (Optional)</p>
                                    <div className="flex flex-row pt-6 gap-x-2">
                                        <Input
                                            className="h-10"
                                            onChange={(e) => setCurrentVariant(e.target.value)}
                                            placeholder="Enter variant, eg: yorkshire(terier), boston(bullDog)"
                                            value={currentVariant}
                                        />
                                        <SecondaryButton tooltip="Add variant" onPress={() => {
                                            if (currentVariant.length > 0) {
                                                setVariants((prevState) => [...prevState, currentVariant])
                                                setCurrentVariant('')
                                            }
                                        }} />
                                    </div>

                                    <div className="gap-y-2 py-5">
                                        {variants.map((v) => <Card key={v} className="p-2 my-2" shadow="sm" radius="sm">
                                            <ListItemUI onVariantAdd={null} name={v} onDelete={(e) => setVariants(prevState => removeElementFromArray(prevState, v))} />
                                        </Card>)}
                                    </div>
                                </div>
                                }
                                <div className="flex flex-row gap-x-2">
                                    <SubmitButton
                                        className="flex-3/4"
                                        tooltipText="Persists changes in the database"
                                        label="Confirm"
                                        isDisabled={!isFormValid}
                                    />
                                    <ResetButton
                                        className="flex-1/4"
                                        tooltipText="Clear form and start over"
                                        label="Reset"
                                    />

                                </div>

                            </div>
                        </Form>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>
    )
}