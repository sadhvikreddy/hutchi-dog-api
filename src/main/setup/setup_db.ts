import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore'

const serviceAccont = require("../../../firebase-auth.json")

initializeApp({
    credential: admin.credential.cert(serviceAccont)
})

const db = getFirestore()

export default db