"use server"

export default async function createData(name: string, variants?: string[]) {
    const uri = `${process.env.ENDPOINT}/upsert/dog-breed/${name}`

    const req = await fetch(uri, {
        method: "PUT",
        body: JSON.stringify(variants)
    })
    return req.json();
}