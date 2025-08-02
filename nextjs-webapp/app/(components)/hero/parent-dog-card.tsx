import { useDisclosure } from "@heroui/react";
import AnimationWrapper from "./animation-wrapper";
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";
import Dog from "@/models/dog";
import DogCard from "./dog-card";
import SecondaryButton from "../buttons/secondary-button";
import AddVariant from "./add-variant";
import { ListItem } from "./list-Item";

export default function ParentDogCard({ dog, delay }: { dog: Dog, delay: number }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()


    return (
        <AnimationWrapper
            delay={delay}
            id={dog.id}
        >
            <DogCard>
                <div className="flex flex-row justify-between">
                    <p className="text-lg md:text-xl font-md">Family of {capitalizeFirstLetter(dog.name)}'s</p>
                    <SecondaryButton
                        tooltip="Add a variant to the Breed"
                        onPress={onOpen}
                    />
                    <AddVariant
                        name={dog.id}
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        onClose={onClose}
                    />
                </div>
                <div className="py-4 md:m-2 md:p-4">
                    {dog.variants.map(variant => {
                        const newDog: Dog = {
                            id: variant + "_" + dog.name,
                            name: variant + " " + dog.name,
                            variants: [],
                            created_at: dog.created_at,
                            updated_at: dog.updated_at
                        }
                        return (
                            <DogCard key={newDog.id}>
                                <ListItem dog={newDog} type="variant" />
                            </DogCard>
                        );
                    })}
                </div>
            </DogCard>
        </AnimationWrapper>
    );
}