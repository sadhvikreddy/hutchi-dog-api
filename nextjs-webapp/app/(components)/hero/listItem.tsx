import { fetchMetadata } from "@/app/actions/fetch-metadata";
import { extractMeta } from "@/app/utils/extract-meta";
import Dog from "@/models/dog";
import { Card } from '@heroui/card'
import Image from "next/image";


export default async function ListItem({dog}: {dog: Dog}) {
    const meta = await fetchMetadata(`${dog.name}`)
    const dogWithMeta = extractMeta(dog, meta)

    return <Card
    className="p-4 overflow-scroll">
        <div className="flex flex-row items-center justify-between">
            <p>{dogWithMeta.name.toUpperCase()}</p>
            <Image 
            src={dogWithMeta.imageUrl || "/placeholder-image/image.png"}
            alt={""}
            width={200}
            height={200}
            />
        </div>
    </Card>
}