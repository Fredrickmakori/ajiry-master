import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./home.css";
import Header from "../header/header";
import Feeds from "./feeds/feeds";
import { Footer } from "../header/header";

//import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="route-container">
        <div className="route-title">
          <p>KISII CENTER</p>

          <i>Welcome to the future</i>
        </div>
        <span>
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
                login
              </Link>
            </Button>
            <Button>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </Button>
          </div>
        </span>
        <div className="main">
          <div className="feeds">
            <Feeds />
          </div>
          <p className="vision">
            Our vision is to be the most preferred community of Kisii.
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
