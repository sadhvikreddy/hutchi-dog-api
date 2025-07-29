"use server"

export default async function fetchData() {
    const uri = `${process.env.ENDPOINT}/all`

    const req = await fetch(uri)
    return req.json();
}