import { firestore } from "firebase-admin";
const db = firestore();

const userSchema = db.collection("user-details");

export default userSchema;
