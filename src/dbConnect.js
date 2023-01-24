import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// need to import service account from secret file

export default function dbConnect() {
    // check if not connected
    if(!getApps().length) {
        // connect
        initializeApp({
            credential: cert(serviceAccount)
        });
    };
    // return db connection
    return getFirestore();
};