"use server"

export default async function deleteData(name: string) {
    const uri = `${process.env.ENDPOINT}/delete/dog-breed/${name}`

    const req = await fetch(uri, {
        method: "DELETE"
    })
    return req.json();
}