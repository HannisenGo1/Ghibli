//har laddat ner zustand

import { create } from "zustand";

import{ Films} from '../data/Api'

interface ListFilms {
    allFilms: Films[];
    setAllFilms: (allFilms:Films[]) => void;
}

const useFilms = create<ListFilms>((set) => ({
    allFilms: [],
    setAllFilms: (films: Films[]) => set(() => ({
        allFilms: films
    }))
}))

export {useFilms}