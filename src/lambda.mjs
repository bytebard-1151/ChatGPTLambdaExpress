// import awsServerlessExpress from "aws-serverless-express";
// import app from "./app.mjs";
// const server = awsServerlessExpress.createServer(app);

// export const handler = (event, context) =>
//   awsServerlessExpress.proxy(server, event, context);

import app from "./app.mjs";
import { createServer } from "aws-serverless-express";
import { proxy } from "aws-serverless-express";

// Create the server
const server = createServer(app);

// Export the handler function using ES module syntax
export const handler = (event, context) => {
  return proxy(server, event, context);
};
