import { Suspense } from "react";
import Loading from "./loading";
import ListWrapper from "./(components)/hero/list-wrapper";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ListWrapper />
      </Suspense>
    </>
  );
}
