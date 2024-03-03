import OpenAI from "openai";

interface Options{
    prompt: string;

}

export const prosConsDicusserStreamUseCase = async(openai:OpenAI,   { prompt }: Options)=>{

    return await openai.chat.completions.create({
        messages: [
            { 
            role: "system", 
            content: `
            Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
            la respuesta debe de ser en formato markdown,
            los pros y contras deben de estar en una lista,
            `},
            {
            role:"user",
            content:prompt    
            }
        ],
        stream:true,
        model: "gpt-3.5-turbo",
        temperature:0.3,
        max_tokens:150
      });
      
      //const jsonResponse= JSON.parse(completion.choices[0].message.content);
    
     //return jsonResponse;

}