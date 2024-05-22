import {
  getCurrentBalance,
  getUpcomingPayouts,
  status,
  refund,
} from "../services/datmanServices.mjs";

export const tools = [
  {
    type: "function",
    function: {
      name: "getCurrentBalance",
      description: "Get the current balance for a given merchant ID",
      parameters: {
        type: "object",
        properties: {
          mid: {
            type: "string",
          },
        },
        required: ["mid"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "getUpcomingPayouts",
      description:
        "Get the upcoming and pending payouts for a given merchant ID",
      parameters: {
        type: "object",
        properties: {
          mid: {
            type: "string",
          },
        },
        // required: ["mid"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "status",
      description:
        "Get the account status, bank account status, and ID status for a given merchant ID",
      parameters: {
        type: "object",
        properties: {
          mid: {
            type: "string",
          },
        },
        // required: ["mid"],
      },
      output: {
        type: "object",
        properties: {
          bankStatus: {
            type: "string",
            description: "The status of the bank account",
          },
          accountStatus: {
            type: "string",
            description: "The status of the account",
          },
          idStatus: {
            type: "string",
            description: "The status of the ID",
          },
        },
      },
    },
  },

  {
    type: "function",
    function: {
      name: "refund",
      description: "refund status for a given merchant ID and the order id",
      parameters: {
        type: "object",
        properties: {
          mid: {
            type: "string",
          },
          amount: {
            type: "number",
          },
        },
        required: ["mid", "amount"],
      },
      output: {
        type: "object",
        properties: {
          status: {
            type: "string",
            description: "The status of the refund",
          },
        },
      },
    },
  },
];

export const availableTools = {
  getCurrentBalance,
  getUpcomingPayouts,
  status,
  tools,
  refund,
};
