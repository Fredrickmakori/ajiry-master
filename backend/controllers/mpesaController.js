// backend/controllers/mpesaController.js

import axios from "axios";
import { mpesaConfig } from "../config/mpesaConfig.js";
import "../utils/getAccessToken.js"; // Assuming you have a utility to get the access token

export const initiateMpesaTransaction = async (req, res) => {
  const { amount, phoneNumber } = req.body;

  const requestPayload = {
    BusinessShortCode: mpesaConfig.shortCode,
    Password: "YOUR_GENERATED_PASSWORD", // Generate using Base64 encoding
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: mpesaConfig.shortCode,
    CallbackURL: "YOUR_CALLBACK_URL",
    TransactionDesc: "Payment for services",
  };

  try {
    const response = await axios.post(
      mpesaConfig.lipaNaMpesaOnline,
      requestPayload,
      {
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error initiating M-Pesa transaction:", error);
    res.status(500).json({ message: "Transaction failed", error });
  }
};
