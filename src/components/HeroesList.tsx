import { Link } from "react-router-dom";
import { Hero } from "../data/data";
import "./HeroesList.css";

interface Props {
    heroes: Array<Hero>;
}

const HeroesList = ({ heroes }: Props) => {
    return (
        <ul className="heroes">
            {heroes.map((hero) => (
                <li key={hero.id} className="hero-card">
                    <img
                        className="hero-card__img"
                        src={`/heroes/${hero.id}.jpg`}
                        alt={`Hero ${hero.superhero}`}
                        height={200}
                    />
                    <div className="hero-card__description">
                        <div className="hero-card__name">{hero.superhero}</div>
                        <div className="hero-card__alterego">
                            {hero.alter_ego === hero.characters ? (
                                hero.alter_ego
                            ) : (
                                <ul className="hero-card__characters">
                                    {hero.characters
                                        .split(",")
                                        .map((character) => (
                                            <li key={character}>{character}</li>
                                        ))}
                                </ul>
                            )}
                        </div>
                        <div className="hero-card__first-appearance">
                            {hero.first_appearance}
                        </div>
                        <Link to={`/hero/${hero.id}`}>More...</Link>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default HeroesList;
