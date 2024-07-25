//import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { PaymentForm } from "./components/PaymentForm";
//import AddUserDetails, { db } from "./config/firebase";
//import { SetStudent } from "./config/firebase";
function App() {
  //const [users, admitNewUsers] = useState([]);

  return (
    <div className="signin">
      <Auth />
      <PaymentForm />
    </div>
  );
}

export default App;
