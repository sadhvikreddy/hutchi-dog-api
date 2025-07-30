"use client"

import Dog from "@/models/dog";
import { Card } from "@heroui/card";
import ListItem from "./listItem";
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";
import { useDogStore } from "@/store/dogStore";
import { useEffect, useState } from "react";
import DogCard from "./dog-card";
import Loading from "@/app/loading";

export default function HeroList() {
  const [loading, setLoading] = useState(true);
  const { dogs, populate } = useDogStore();

  useEffect(() => {
    const get = async () => {
      setLoading(true)
      await populate()
      setLoading(false)
    }

    get();
  }, [])

  if (loading) {
    return <Loading />
  }

    return <div className="w-1/2 justify-self-center flex flex-col md:grid-cols-2 g-4">
      <div>
        <p className="text-2xl font-bold pb-5 z-50">Dogs Found in Remote JSON</p>
      </div>
      {dogs.map((entry: Dog) => {
        if (entry.variants.length === 0) {
          return (
            <DogCard key={entry.id}>
              <ListItem dog={entry} />
            </DogCard>
          )
        }
        else {
          return (
            <DogCard key={entry.id}>
              <p className="text-xl font-md">Family of {capitalizeFirstLetter(entry.name)}'s</p>
              <div className="m-2 p-4">
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
                      <ListItem key={newDog.id} dog={newDog} />
                    </DogCard>
                  );
                })}
              </div>
            </DogCard>
          )
        }
      })}
    </div>
}