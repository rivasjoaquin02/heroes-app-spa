import { Hero } from "../data/data";
import { heroes } from "../data/data";

export const getHeroById = async (id: string): Promise<Hero | undefined> => {
    return heroes.find((hero: Hero) => hero.id === id);
};
