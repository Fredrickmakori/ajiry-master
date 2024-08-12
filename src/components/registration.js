import React from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import "./registration.css";
import "./home.css";
import Header from "../header/header";
import Button from "../Button/Button";

const Register = () => {
  const [age, setAge] = React.useState("");
  const [disability, setDisability] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [nationalIDNumber, setNationalIDNumber] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "user-details"), {
        age: parseInt(age),
        disability,
        firstName,
        gender,
        lastName,
        nationalIDNumber: parseInt(nationalIDNumber),
      });

      alert("User details added successfully!");

      window.location.href = "/lhome";
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(
        "Error adding user details please ensure you've Logged In to before adding user details"
      );
      window.location.href = "/lauth";
    }
  };

  return (
    <div className="App">
      <span>
        <Header />
      </span>
      <div className="route-container">
        <h2 className="route-title">Welcome to the Ajiry Registration Page</h2>
        <p className="route-content">
          <i>Please fill in the fields as indicated</i>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <br />
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Disability:
          <input
            type="checkbox"
            checked={disability}
            onChange={(e) => setDisability(e.target.checked)}
          />
        </label>

        <br />
        <label>
          Gender:
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>

        <br />
        <label>
          National ID Number:
          <input
            type="number"
            value={nationalIDNumber}
            onChange={(e) => setNationalIDNumber(e.target.value)}
          />
        </label>
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Register;
