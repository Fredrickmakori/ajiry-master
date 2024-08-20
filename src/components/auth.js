import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup, // Import signOut function
} from "firebase/auth";
import { useState } from "react";
import "./Auth.css";
import Button from "../Button/Button";
import "./home.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
    window.location.href = "/lhome";
  };

  const signinWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
    window.location.href = "/lhome";
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="button"
            onClick={signIn}
            className="btn"
            value="Login"
          />
          <Button
            type="button"
            onClick={signinWithGoogle}
            className="btn"
            value="Login with Google"
          />
        </div>
      </form>
    </div>
  );
};
export default Auth;
