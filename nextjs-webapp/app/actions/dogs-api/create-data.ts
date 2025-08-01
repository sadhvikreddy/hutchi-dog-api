"use server"

export default async function createData(name: string, variants?: string[]) {
    const b = {
        'variants': variants ?? []
    }
    const uri = `${process.env.ENDPOINT}/upsert/dog-breed/${name}`

    const req = await fetch(uri, {
        method: "PUT",
        body: JSON.stringify(b),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return req.json();
}