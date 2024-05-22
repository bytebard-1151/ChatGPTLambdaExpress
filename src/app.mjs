import express from "express";
import bodyParser from "body-parser";
import messageRoutes from "./routes/message.mjs";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/message", messageRoutes);

// Default route to handle all other routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;
