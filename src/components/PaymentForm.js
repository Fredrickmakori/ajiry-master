import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
const PaymentForm = () => {
  const [phone, setPhone] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const MakePayment = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "payment"), {
        accountNumber: parseInt(accountNumber),
        phone,
        amount: parseInt(amount),
      });
      alert(
        "Your payment is being processed please wait for the MPESA confirmation"
      );
      window.location.href = "/lhome";
    } catch (error) {
      console.error(
        "Error adding your details to the seerver, please chack for your internet connection"
      );
    }
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  return (
    <form onSubmit={MakePayment}>
      <label className="payment-label">
        Phone:
        <input type="text" value={phone} onChange={handlePhoneChange} />
      </label>
      <label className="payment-label">
        Account Number:
        <input
          type="text"
          value={accountNumber}
          onChange={handleAccountNumberChange}
        />
      </label>
      <label className="payment-label">
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit" onClick={MakePayment}>
        Submit
      </button>
    </form>
  );
};
export default PaymentForm;
