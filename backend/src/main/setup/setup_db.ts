import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore'

// ideally i wouldn't put anything on top of root directory.
// i wouldnt never have same repo concerning two different infrastructures. (not in favour of monorepos)
// In short, messy yet secure option. Will see if time permits to make this better.
const serviceAccont = require("../../../../etc/secrets/firebase-auth.json")

initializeApp({
    credential: admin.credential.cert(serviceAccont)
})

const db = getFirestore()

export default db