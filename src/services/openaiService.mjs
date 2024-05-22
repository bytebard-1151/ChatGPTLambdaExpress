import OpenAI from "openai";
import userContext from "../utils/userContext.mjs";
import { tools, availableTools } from "../tools/tool.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const processMessage = async (mid, userInput, userId) => {
  if (!userContext[userId]) {
    userContext[userId] = [
      {
        role: "system",
        content: `You are a customer support agent. Only use the tools you have been provided with.`,
      },
    ];
  }

  userContext[userId].push({
    role: "user",
    content: userInput,
  });

  for (let i = 0; i < 5; i++) {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: userContext[userId],
      tools: tools,
    });

    const { finish_reason, message } = response.choices[0];
    console.log("Finish reason: ", finish_reason);
    console.log("Message: ", message);

    if (finish_reason === "tool_calls" && message.tool_calls) {
      const functionName = message.tool_calls[0].function.name;
      const functionToCall = availableTools[functionName];
      const functionArgs = JSON.parse(message.tool_calls[0].function.arguments);
      functionArgs.mid = mid;
      const functionArgsArr = Object.values(functionArgs);
      const functionResponse = await functionToCall.apply(
        null,
        functionArgsArr
      );

      userContext[userId].push({
        role: "function",
        name: functionName,
        content: `The result of the last function was this: ${JSON.stringify(
          functionResponse
        )}`,
      });
    } else if (finish_reason === "stop") {
      userContext[userId].push(message);
      return message.content;
    }
  }

  return "The maximum number of iterations has been met without a suitable answer. Please try again with a more specific input.";
};
