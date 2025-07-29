import Dog from "@/models/dog";
import { Suspense } from "react";
import fetchData from "./actions/dogs-api/fetch-data";
import MainList from "./(components)/hero/main-list";

export default async function Home() {
  const data: Dog[] = await fetchData();
  return (
    <>
      <Suspense>
        <MainList data={data} />
      </Suspense>
    </>
  );
}
