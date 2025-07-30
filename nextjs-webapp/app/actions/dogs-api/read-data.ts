"use server"

export default async function readData() {
    const uri = `${process.env.ENDPOINT}/all`

    const req = await fetch(uri)
    return req.json();
}