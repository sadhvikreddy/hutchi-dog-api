"use client"

import Dog from "@/models/dog";
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";


export default function ListItem({ dog }: { dog: Dog }) {
    return <div className="flex flex-col items-center justify-between ">
        <p className="font-extralight text-indigo-800">{capitalizeFirstLetter(dog.name)}</p>
    </div>
}