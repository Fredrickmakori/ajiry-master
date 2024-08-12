import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./home.css"; // Import the CSS file
import Header from "../header/header";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";

const Home = () => {
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
          <h2 className="route-title">Welcome, {user.firstName}!</h2>
        ) : null}
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
          <Button>
            <Link to="/auth" className="nav-link">
              Login
            </Link>
          </Button>
          <Button>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
