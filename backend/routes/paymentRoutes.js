import { Router } from "express";
import { createPayment, getPayments } from "../controllers/paymentController";

const router = Router();

router.post("/", createPayment);
router.get("/:userId", getPayments);

export default router;
