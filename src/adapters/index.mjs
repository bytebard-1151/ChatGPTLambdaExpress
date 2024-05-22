import { WhatsappAdapter } from "./whatsappAdapter.mjs";
import { IvrAdapter } from "./ivrAdapter.mjs";

export const getAdapter = (platform) => {
  switch (platform) {
    case "whatsapp":
      return new WhatsappAdapter();
    case "ivr":
      return new IvrAdapter();
    default:
      throw new Error("Unknown platform");
  }
};
