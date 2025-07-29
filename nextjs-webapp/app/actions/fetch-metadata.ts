"use server"

export async function fetchMetadata(query: string) {
    const uri = `${process.env.METADATA_URL}?key=${process.env.GOOGLE_SEARCH_API_KEY}&query=${query}`;

    const resp = await fetch(uri, {
        cache: 'force-cache'
    });

    if(resp && resp.status !== 200) {
        return {}
    } else {
        return resp.json()
    }
}