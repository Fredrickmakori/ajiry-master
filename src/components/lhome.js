import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./home.css"; // Import the CSS file
import Header from "../header/header";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "../config/firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import React, { useEffect } from "react";

const Lhome = () => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "user-details", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          setUser(userDocSnapshot.data());
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const userDetails = collection(db, "user-details");
  const getUserDetails = async () => {
    try {
      const data = await getDocs(userDetails);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserDetails(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const signout = async (e) => {
    // Corrected function name to signout
    e.preventDefault();
    try {
      await signOut(auth); // Using the imported signOut function
    } catch (err) {
      console.error(err);
    }
    window.location.href = "/logout";
  };

  const videoSource = "https://www.w3schools.com/html/mov_bbb.mp4";
  const videoOptions = {
    loop: true,
    muted: true,
    autoPlay: true,
    playsInline: true,
  };
  const video = (
    <video className="video-background" {...videoOptions}>
      <source src={videoSource} type="video/mp4" />
    </video>
  );
  return (
    <div className="home-container" video={video} {...videoOptions}>
      <span>
        <Header />
        {user ? (
          <h2 className="route-title">
            Welcome, {user.firstName}! to the ajiry user portal
          </h2>
        ) : (
          <h2 className="route-title">
            Welcome currentUser to the ajiry registration portal
          </h2>
        )}
      </span>
      <div className="route-container">
        <h2 className="route-title">Welcome to the AJiry home page</h2>
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
            //type="submit" // Change to button type
            type="button" // Change to button type
            className="btn"
            value="Sign Out"
            onClick={signout} // Use the corrected signout function
          />
        </div>
      </div>
    </div>
  );
};

export default Lhome;
