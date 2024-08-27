// https://ghibliapi.vercel.app/films/
// HÄMTA API DATAN HÄR:::

export interface Api {
    data: Films[];
}

export type Films = {
id: string | number;
title: string;
image: string | number;
description: string;
release_date: string;
producer: string;
}

async function getFilms(): Promise<Api> {
const response: Response = await fetch (' https://ghibliapi.vercel.app/films/')
if (!response.ok){
    throw new Error('network respons wasnt okej')
}
const data: Api  = await response.json();
return data;
}

export {getFilms}