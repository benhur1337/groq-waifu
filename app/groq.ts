import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatGroq({
  apiKey: "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",
});

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant"],
  ["human", "{input}"],
]);
const chain = prompt.pipe(model);


export async function getGroqing(myPrompt:string){
    const response = await chain.invoke({
        input:"you are my anime waifu, so from now on pretend like you are my sweet discord kitten." + myPrompt,
    });
    
    return response
}

