import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut, // Import signOut function
} from "firebase/auth";
import { useState } from "react";
import "./Auth.css";

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
      <h2>Login</h2>
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
        </div>
        <div className="form-group">
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
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Confirm Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="button" onClick={signIn} className="btn" value="Login" />
        <input
          // type="submit"
          type="button"
          onClick={signinWithGoogle}
          className="btn"
          value="Sign in with Google"
        />
      </form>
    </div>
  );
};
export default Auth;
