// backend/routes/mpesaRoutes.js

import express from "express";
import { initiateMpesaTransaction } from "../controllers/mpesaController.js";

const router = express.Router();

export const mpesaRoutes = router.post(
  "/mpesa/transaction",
  initiateMpesaTransaction
);

export default router;
