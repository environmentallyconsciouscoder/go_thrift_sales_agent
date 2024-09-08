import { Recommendations } from "@sales-agent/core/recommendations";
import { Util } from "@sales-agent/core/util";

export const main = Util.handler(async (event) => {
    const {
        name = '',
        age = '',
        gender = '',
        stylePreference = '',
        fitInformation = '',
        budgetRange = ''
    } = event.queryStringParameters || {};

    // Log the incoming parameters for debugging purposes
    console.log("Received query parameters:", { name, age, gender, stylePreference, fitInformation, budgetRange });

    // Call the compute function with the extracted parameters
    const result = await Recommendations.compute(name, age, gender, stylePreference, fitInformation, budgetRange);

    // Return a JSON string as a response
    return JSON.stringify({ result });
});
