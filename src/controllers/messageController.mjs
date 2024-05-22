import { processMessage } from "../services/openaiService.mjs";
import { getAdapter } from "../adapters/index.mjs";

const allowedQueries = ["balance", "amount", "refund", "status", "payout"];
export const handleIncomingMessage = async (req, res) => {
  const adapter = getAdapter("whatsapp");
  const incomingMessage = adapter.getMessage(req.body);
  const { from, to, text } = incomingMessage;

  console.log("Incoming message: ", incomingMessage);
  const isAllowedQuery = allowedQueries.some((query) =>
    text.toLowerCase().includes(query)
  );

  let responseMessage;

  if (isAllowedQuery) {
    responseMessage = await processMessage(req.merchantId, text, from);
  } else {
    responseMessage = `I'm Datman assistant. I can't assist with that request. Please request things related to payment, Refunds, Account status, and so on.`;
  }

  try {
    await adapter.sendMessage(responseMessage, to, from);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message: ", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};
