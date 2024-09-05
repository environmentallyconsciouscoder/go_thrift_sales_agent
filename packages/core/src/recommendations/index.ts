import OpenAI from "openai";
import { Resource } from "sst";

const openai = new OpenAI({
    apiKey: Resource.OpenAiKey.value,
});

export module Recommendations {
    export async function compute(
        name: string,
        age: string,
        gender: string,
        stylePreference: string,
        fitInformation: string,
        budgetRange: string
    ) {
        console.log("name", name);
        console.log("age", age);
        console.log("gender", gender);
        console.log("stylePreference", stylePreference);
        console.log("fitInformation", fitInformation);
        console.log("budgetRange", budgetRange);

        const userPrompt = `My name is ${name}. I am ${age} years old, ${gender}, and I prefer a ${stylePreference} style. I have a ${fitInformation} body type, and my budget is ${budgetRange}.`;

        const completion = await openai.chat.completions.create({
            messages: [
              {
                role: "system",
                content: `You are a fashion consultant.
                          Your job is to assist customers by recommending clothes to buy that fit their preferences.
                          Return the response in valid JSON format with double quotes around property names.
                          Like this:
                          {style: [{\"type\": \"t-shirt\", \"brand\": \"adidas\", \"color\": \"blue\", \"size\": \"XL\", \"price\": \"£30\", \"link\": \"www.example.com\"}], description: \"here is the look you are after\"}.
                          Replace the values accordingly.
                          make sure the response in description is friendly and upbeat.
                          Also, make sure to provide a selection of clothing of at least 5 items, including tops, trousers, shoes, hats, and accessories.`
              },
              {
                role: "user",
                content: userPrompt
              }
            ],
            model: "gpt-3.5-turbo",
          });

          const content = completion.choices[0].message.content;

          console.log("Response content:", content);
          return content;
    }
}
