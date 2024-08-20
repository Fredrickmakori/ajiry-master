import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./home.css";
import Header from "../header/header";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
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
              login
            </Link>
          </Button>
          <Button>
            <Link to="/register" className="nav-link">
              <i class="bi bi-house-door"></i>
              Register
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
