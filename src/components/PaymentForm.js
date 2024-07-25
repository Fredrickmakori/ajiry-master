import React, { useState } from "react";

const PaymentForm = () => {
  const [phone, setPhone] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        accountNumber,
        amount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone:
        <input type="text" value={phone} onChange={handlePhoneChange} />
      </label>
      <label>
        Account Number:
        <input
          type="text"
          value={accountNumber}
          onChange={handleAccountNumberChange}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
};

export default PaymentForm;
