import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import admin from "firebase-admin";
//import serviceAccount from "./config/ajiry-master-firebase-adminsdk-yjnmn-bd41192ea6.json"; // Update with your service account key path
import dotenv from "dotenv";
import { mpesaRoutes } from "./routes/mpesaRoutes.js";
import serviceAccount from "./config/ajiry-master-firebase-adminsdk-yjnmn-bd41192ea6.json" assert { type: "json" };

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api", mpesaRoutes); //mounts the mpesa routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser to handle URL-encoded requests

app.use(bodyParser.json()); // Use body-parser to handle JSON requests

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore Database Reference
const db = admin.firestore();

// Route to Register User Details
app.post("/api/register", async (req, res) => {
  try {
    const { userId, name, age, phoneNumber, phaseNumber } = req.body;

    // Verify the user with Firebase Authentication
    const userRecord = await admin.auth().getUser(userId);

    if (!userRecord) {
      return res.status(403).send("User not authenticated");
    }

    // Check if the registration fee is KES 200
    const registrationFee = 200;
    const registrationData = {
      name,
      age,
      phoneNumber,
      phaseNumber,
      registrationFee,
      userId,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Add the user details to Firestore
    await db.collection("users").doc(userId).set(registrationData);
    res.status(200).json({ message: "User registered successfully", userId });
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
  }
});
