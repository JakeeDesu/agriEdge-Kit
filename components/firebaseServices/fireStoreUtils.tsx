import { app } from "./firebase"
import { getFirestore,  collection, getDocs, addDoc } from "firebase/firestore"
import { sync } from "framer-motion";



const db = getFirestore(app)


export const setData = async (collection_name: string, data: any) => {
    const collectionRef = collection(db, collection_name);
    return await addDoc(collectionRef, data)
}

export const getData = async (collection_name: string) => {
    // Get a list of cities from your database

    const collectionRef = collection(db, collection_name);
    const docsSnapshot = await getDocs(collectionRef);
    const docs = docsSnapshot.docs.map(doc => doc.data())
    return docs;
}

// Exemple : 
// getData('newsLetterCollection').then(docs => {
//   console.log("our documents", docs)
// })