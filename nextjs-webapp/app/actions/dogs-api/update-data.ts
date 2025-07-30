"use server"

export async function addVariantData(name: string, variant: string) {
    const uri = `${process.env.ENDPOINT}/create/dog-breed/${name}/variant/${variant}`

    const req = await fetch(uri, {
        method:"PUT"
    })
    return req.json();
}

export async function deleteVariantData(name: string, variant: string) {
    const uri = `${process.env.ENDPOINT}/delete/dog-breed/${name}/variant/${variant}`
    
    const req = await fetch(uri, {
        method: "DELETE"
    })

    return req.json()
}