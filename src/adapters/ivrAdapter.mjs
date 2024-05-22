import twilio from "twilio";
const { MessagingResponse } = twilio;

export class IvrAdapter {
  getMessage(body) {
    return body.Digits; // Assuming IVR input is captured as digits
  }

  async sendMessage(message, from, to) {
    const response = new MessagingResponse();
    response.say(message);

    // Assuming you have a way to send the TwiML response back to the caller
    // For simplicity, we return the response as a string
    return response.toString();
  }
}
