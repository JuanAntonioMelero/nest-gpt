import OpenAI from "openai";

interface Options{
    prompt: string;

}


export const orthographyCheckUseCase = async(openai:OpenAI,  options: Options)=>{
    const { prompt }  = options;

    const completion = await openai.chat.completions.create({
        messages: [
            { 
            role: "system", 
            content: `
            Te serán proveidos textos con posibles errores ortográficos y gramaticales,
            Debes de responder en formato JSON,
            tu tarea es corregirlos y retornar información soluciones,
            también debes de daur un porcentaje de acierto por el usuario,
            Si no hay errores, debes de retornar un mensaje de felicitación.
            Ejemplo de salida:
                {
                    userScore: number,
                    errors: string[], // ['error -> solución']
                    message: string, // Usa emojis y texto para felicitar al usuario
                }
            `},
            {
            role:"user",
            content:prompt    
            }
        ],
        model: "gpt-3.5-turbo",
        temperature:0.3,
        max_tokens:150
      });
      console.log(completion);
      const jsonResponse= JSON.parse(completion.choices[0].message.content);
    //return completion.choices[0]
      return jsonResponse;

}