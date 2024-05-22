import { Router } from "express";
import { handleIncomingMessage } from "../controllers/messageController.mjs";
const router = Router();

// Middleware to extract the merchant ID from the phone number

const extractMerchantId = (req, res, next) => {
  // const phoneNumber = req.body.phoneNumber;
  // Perform logic to extract the merchant ID from the phone number
  // const merchantId = extractMerchantIdFromPhoneNumber(phoneNumber);
  // req.merchantId = merchantId;
  req.merchantId = "63123456";
  next();
};

router.post("/", extractMerchantId, handleIncomingMessage);

export default router;
