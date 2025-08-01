"use client"

import Dog from "@/models/dog";
import { ListItem } from "./listItem";
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";
import { useDogStore } from "@/store/dogStore";
import { useEffect, useState } from "react";
import DogCard from "./dog-card";
import Loading from "@/app/loading";
import AnimationWrapper from "./animation-wrapper";
import lesserOf from "@/app/utils/lesserOf";
import { AnimatePresence } from "framer-motion";
import { useDisclosure } from "@heroui/react";
import AddVariant from "./add-variant";

export default function HeroList() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  const [loading, setLoading] = useState(true);
  const { dogs, populate } = useDogStore();

  useEffect(() => {
    const get = async () => {
      setLoading(true)
      await populate()
      console.log(dogs)
      setLoading(false)
    }

    get();
  }, [])

  if (loading) {
    return <Loading />
  }

  return <div className="w-screen md:w-1/2 justify-self-center flex flex-col">
    <div>
      <p className="text-xl m-4 md:text-2xl font-bold pb-5 z-50">Dogs Found in Remote JSON</p>
    </div>
    <AnimatePresence>
      {dogs.map((entry: Dog, index) => {
        const delay = lesserOf((0.01 + (index / 10)), 0.30)
        if (entry.variants.length === 0) {
          return (
            <AnimationWrapper
              delay={delay}
              key={`w:${entry.id}`}
              id={entry.id}
            >
              <DogCard>
                <ListItem dog={entry} />
              </DogCard>
            </AnimationWrapper>
          )
        }
        else {
          return (
            <AnimationWrapper
              key={`w:${entry.id}`}
              delay={delay}
              id={entry.id}
            >
              <DogCard>
                <div className="flex flex-row justify-between">
                  <p className="text-lg md:text-xl font-md">Family of {capitalizeFirstLetter(entry.name)}'s</p>
                  <AddVariant
                    name={entry.name}
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    onClose={onClose}
                  />
                </div>
                <div className="py-4 md:m-2 md:p-4">
                  {entry.variants.map(variant => {
                    const newDog: Dog = {
                      id: variant + "_" + entry.name,
                      name: variant + " " + entry.name,
                      variants: [],
                      created_at: entry.created_at,
                      updated_at: entry.updated_at
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
          )
        }
      })}
    </AnimatePresence>
  </div>
}