import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export class WhatsappAdapter {
  getMessage(body) {
    const text = body.Body;
    const { From: from, To: to } = body;
    return { text, from, to };
  }

  async sendMessage(message, from, to) {
    return client.messages.create({
      body: message,
      from: from,
      to: to,
    });
  }
}
