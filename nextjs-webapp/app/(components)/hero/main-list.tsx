"use client"

import Dog from "@/models/dog";
import { Card } from "@heroui/card";
import ListItem from "./listItem";
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";
import { useDogStore } from "@/store/dogStore";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";

export default function MainList() {
  const [loading, setLoading] = useState(true);
  const { dogs,  populate } = useDogStore();

  useEffect(() => {
    const get = async () => {
      setLoading(true)
      await populate()
      setLoading(false)
    }

    get();
  }, [])

  if(loading) {
    return <Spinner />
  }

  return <div className="">
      <div className="w-1/2 justify-self-center flex flex-col md:grid-cols-2 g-4">
        {dogs.map((entry: Dog) => {
        if(entry.variants.length === 0) {
          return (
            <Card
            shadow="none"
            radius="sm"
            key={entry.id} className="m-2 p-4 bg-trasparent border-1.5 border-indigo-800">
              <ListItem dog={entry} />
            </Card>
          )
        }
        else {
          return (
          <Card 
            key={entry.id} 
            className="m-2 p-4 bg-transparent border-1 border-amber-50"
            shadow="none"
            radius="sm"
            >
            <p className="text-xl font-bold">Family of {capitalizeFirstLetter(entry.name)}'s</p>
            <div className="m-2 p-4">
            {entry.variants.map(variant => {
              const newDog: Dog = {
                id: variant + "_" + entry.name,
                name: variant + " " + entry.name,
                variants: [],
                created_at: entry.created_at,
                updated_at: entry.updated_at
              }
              return  <Card key={newDog.id} radius="none" className="m-2"> <ListItem key={newDog.id} dog={newDog} /></Card>
            
          })}  </div></Card>
        )}
      })}
      </div>
  </div>
}