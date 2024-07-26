//import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { PaymentForm } from "./components/PaymentForm";
import AddUserDetails, { db } from "./config/firebase";
//import { SetStudent } from "./config/firebase";
export default function App() {
  //const [users, admitNewUsers] = useState([]);

  return (
    <div >
      <Auth />
    </div>
  );
}
export default function Payment(){
  return (
    
  )
}

