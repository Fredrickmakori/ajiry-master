import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut, // Import signOut function
} from "firebase/auth";
import { useState } from "react";
import "./Auth.css";
import "./home.css";
import Button from "../Button/Button";

const Lauth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
    window.location.href = "/register";
  };

  const signinWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
    window.location.href = "/register";
  };
  console.log(auth?.currentUser?.email);

  return (
    <div className="login-form">
      <h2 className="route-title">Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Confirm Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={signIn}>Sign Up</Button>

          <Button onClick={signinWithGoogle}>Continue with google</Button>
        </div>
      </form>
    </div>
  );
};
export default Lauth;
