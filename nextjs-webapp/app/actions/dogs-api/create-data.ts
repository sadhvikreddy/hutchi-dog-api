"use server"

export async function createData(name: string, variants?: string[]) {
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

export async function updateByJson(json: string) {
    const uri = `${process.env.ENDPOINT}/json?reset=true`

    const req = await fetch(uri, {
        method: "POST",
        body: json,
        headers: {
            "Content-Type": "application/json"
        }
    })

    return req.json();
}