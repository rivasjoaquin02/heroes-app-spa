import { Hero, Publisher } from "../data/data";
import { heroes } from "../data/data";

export const getHeroByPublisher = (publisher: Publisher): Array<Hero> => {
    return heroes.filter((hero: Hero) => hero.publisher === publisher) || [];
};
