"use server"

export default async function createData(name: string) {
    const uri = `${process.env.ENDPOINT}/upsert/dog-breed/${name}`

    const req = await fetch(uri, {
        method: "PUT"
    })
    return req.json();
}