"use client"

import Dog from "@/models/dog";
import { ListItem } from "./list-Item";
import DogCard from "./dog-card";
import AnimationWrapper from "./animation-wrapper";
import lesserOf from "@/app/utils/lesserOf";
import { AnimatePresence } from "framer-motion";
import ParentDogCard from "./parent-dog-card";

export default function HeroList({ dogs }: { dogs: Dog[] }) {
  if(dogs.length === 0) {
    return <><div className="p-5 text-center">No Results</div></>
  }

  return <AnimatePresence>
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
          <ParentDogCard
            key={`pdc:${entry.id}`} dog={entry} delay={delay} />
        )
      }
    })}
  </AnimatePresence>
}