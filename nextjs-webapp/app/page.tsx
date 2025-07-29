import Dog from "@/models/dog";
import { Suspense } from "react";
import ListItem from "./(components)/hero/listItem";

export default async function Home() {
  const req = await fetch(`${process.env.ENDPOINT}/all`);
  const data = await req.json();

  return (
    <>
      <Suspense>
        <div className="flex flex-col gap-y-4">
          {data.map((entry: Dog) => {
          if(entry.variants.length === 0) {
            return (
              <ListItem key={entry.id} dog={entry} />
            )
          }
          else {
            return (
            <div key={entry.id}>
              <p>Family of {entry.name}s</p> 
              {entry.variants.map(variant => {
                const newDog: Dog = {
                  id: variant + "_" + entry.name,
                  name: variant + " " + entry.name,
                  variants: [],
                  created_at: entry.created_at,
                  updated_at: entry.updated_at
                }
                return  <ListItem key={newDog.id} dog={newDog} />
            })}</div>
          )}
        })}
            
        </div>
      </Suspense>
    </>
  );
}
