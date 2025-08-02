"use client"

import { useDogStore } from "@/store/dogStore";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import HeroList from "./hero-list";
import { Input } from "@heroui/react";
import Dog from "@/models/dog";

export default function ListWrapper() {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [searchTerms, setSearchTerms] = useState<Dog[]>([]);
    const { dogs, populate, searchDogs } = useDogStore();

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await populate()
            setLoading(false)
        }
        get();
    }, [])

    useEffect(() => {
        if(search.length < 2) {
            setSearchTerms([])
            return;
        }
        const terms = searchDogs(search);
        setSearchTerms(terms);
    }, [search])




    if (loading) {
        return <Loading />
    }

    return (
        <div className="w-screen md:w-1/2 justify-self-center flex flex-col">
            <div>
                <div
                    className=" md:mx-4 my-5"
                >
                    <Input
                        className=""
                        size="lg"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        label="Search"
                        labelPlacement="outside"
                    />
                </div>
            </div>
            {
                (search.length > 2) ?
                    <HeroList dogs={searchTerms} />
                    : <HeroList dogs={dogs} />

            }
        </div>
    );
}