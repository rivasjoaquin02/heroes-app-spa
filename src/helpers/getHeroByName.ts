import { heroes } from "../data/data";
import { Hero } from "../data/data";

export const getHeroesByName = async (name: string): Promise<Array<Hero>> =>
    heroes.filter((hero: Hero) =>
        hero.superhero.toLowerCase().includes(name.toLowerCase())
    );
