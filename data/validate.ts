// joi validering
// laddat ner nu !  

import { Films } from "./Api";
import Joi from "joi";


type ValiResult = sucessVali | failedVali

interface sucessVali {
sucess: true;
value: Films[]
}

interface failedVali {
sucess: false;
error: string;
}

const schema = Joi.array<Films> ().items(
    Joi.object<Films> ({
        title: Joi.string().required,
        image:Joi.string().uri(),
        description: Joi.string().required(),
        release_date: Joi.string().required(),
        producer: Joi.string().required()
    })
)

export function ValidateFilms(Film: Films[]): ValiResult{

    const result = schema.validate(Film.map(f => ({
        title: f.title,
        image:f.image,
        description:f.description,
        release_date:f.release_date,
        producer:f.producer
    })))
    if (result.error) {
        return {sucess: false, error: result.error.message}
    } else{
        return { sucess: true, value: Film}
    }
}