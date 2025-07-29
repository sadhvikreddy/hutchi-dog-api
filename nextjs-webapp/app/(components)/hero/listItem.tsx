"use client"

import { fetchMetadata } from "@/app/actions/fetch-metadata";
import { extractMeta } from "@/app/utils/extract-meta";
import Dog from "@/models/dog";
import DogWithMeta from "@/models/dog-with-meta";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner"
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";


export default function ListItem({ dog }: { dog: Dog }) {

    return <div className="flex flex-col items-center justify-between ">
        <p className="font-extralight">{capitalizeFirstLetter(dog.name)}</p>
    </div>
}