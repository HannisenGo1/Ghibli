import { create } from "zustand";
import { Films } from '../data/Api';

interface ListFilms {
    allFilms: Films[];
    favoriteFilms: Films[];
    setAllFilms: (allFilms: Films[]) => void;
    addFavorite: (film: Films) => void;
    removeFavorite: (filmId: string | number) => void;
}


const useFilms = create<ListFilms>((set) => ({
    allFilms: [],
    favoriteFilms: [],
    
    setAllFilms: (films: Films[]) => set(() => ({
        allFilms: films
    })),

    addFavorite: (film: Films) => set((state) => ({
        favoriteFilms: [...state.favoriteFilms, film]
    })),

    removeFavorite: (filmId: string | number) => set((state) => ({
        favoriteFilms: state.favoriteFilms.filter(film => film.id !== filmId)
    })),
}));

export { useFilms };
