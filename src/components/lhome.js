import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./home.css";
//import Header from "../Header/header";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Lhome = () => {
  const [userData, setUserDetails] = useState([]);

  const [greeting, setGreeting] = useState("");
  const currentTime = new Date().getHours();
  const UserCollectionRef = collection(db, "user-details");

  useEffect(() => {
    const unsub = onSnapshot(UserCollectionRef, (snapshot) => {
      const filteredData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserDetails(filteredData);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails([user]);
      } else {
        setUserDetails([]);
      }
    });
  }, []);

  const getTimeOfDay = () => {
    if (currentTime >= 5 && currentTime < 12) {
      return "morning";
    } else if (currentTime >= 12 && currentTime < 17) {
      return "afternoon";
    } else if (currentTime >= 17 && currentTime < 21) {
      return "evening";
    } else {
      return "night";
    }
  };

  const timeOfDay = getTimeOfDay();
  setGreeting(
    `Good ${timeOfDay}! ${userData[0]?.firstName} Welcome to the AJiry home page`
  );

  const signout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
    window.location.href = "/logout";
  };

  return (
    <div className="home-container">
      <span>
        <p>{greeting}</p>
      </span>
      <div className="route-container">
        <p className="route-content">
          <i>please click the button for the service you wish to get</i>
        </p>
        <div className="button-container">
          <Button>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Button>
          <Button>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Button>
          <Button>
            <Link to="/payment" className="nav-link">
              Payment
            </Link>
          </Button>
          <Button
            type="button"
            className="btn"
            value="Sign Out"
            onClick={signout}
          />
        </div>
      </div>
    </div>
  );
};

export default Lhome;
