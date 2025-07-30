import { Suspense } from "react";
import MainList from "./(components)/hero/main-list";
import Menubar from "./(components)/menu-bar/menu-bar";

export default function Home() {
  return (
    <>
      <Suspense>
        <div className="fixed top-20 left-10">
          <Menubar />
        </div>
        <MainList />
      </Suspense>
    </>
  );
}
