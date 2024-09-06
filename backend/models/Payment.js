import { firestore } from "firebase-admin";
const db = firestore();

const paymentCollection = db.collection("payments");

export default paymentCollection;
