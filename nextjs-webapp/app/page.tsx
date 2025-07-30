import { Suspense } from "react";
import HeroList from "./(components)/hero/hero-list";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroList />
      </Suspense>
    </>
  );
}
