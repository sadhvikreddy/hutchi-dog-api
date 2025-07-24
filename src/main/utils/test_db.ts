import db from "@/main/setup/setup_db"

export default async function test_db() {
    const snapshot = await db.collection("dogs").get()
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    })
}