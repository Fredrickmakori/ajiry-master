import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup, // Import signOut function
} from "firebase/auth";
import { useState } from "react";
import "./Auth.css";
import Button from "../Button/Button";

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

        <Button type="button" onClick={signIn} className="btn" value="Login" />
        <Button
          // type="submit"
          onClick={signinWithGoogle}
          className="btn"
          value="Sign in with Google"
        />
      </form>
    </div>
  );
};
export default Auth;
