import { auth } from "../config/firebaseConfig";
import User from "../models/User";

export async function register(req, res) {
  const { email, password } = req.body;
  try {
    const userRecord = await auth().createUser({
      email,
      password,
    });

    const user = new User({ email, password });
    await user.save();

    res
      .status(201)
      .json({ message: "User registered successfully", uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const userRecord = await auth().getUserByEmail(email);
    // Implement password verification (e.g., using bcrypt)
    res
      .status(200)
      .json({ message: "User logged in successfully", uid: userRecord.uid });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
