"use client"

import { useState } from "react"
import { getGroqing } from "./groq"

export default function PromptForm(){

    const [response, setResponse] = useState("Hi I am your waifu.")

    async function submitResponse(event:any){
        event.preventDefault()

        const response = await getGroqing(event.target.prompt.value)

        setResponse((response.content).toString())
    }

    return(
        <div className="flex flex-col max-w-[1100px] mx-auto p-6 gap-6">

            <div className="whitespace-pre-line text-2xl">
                {response}
            </div>

            <form className="flex flex-row gap-2" onSubmit={submitResponse}>
                <input className="border border-black p-2 rounded-lg" name="prompt" type="text"/>
                <button className="bg-black border-black p-2 text-white rounded-lg" type="submit">submit</button>
            </form>
        </div>
    )
} 