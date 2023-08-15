import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { Hero } from "../data/data";
import "./HeroInfo.css";

export const loader = async ({ params }) => {
    const hero = await getHeroById(params.heroId);
    if (!hero) return redirect("/");
    return hero;
};

const HeroInfo = () => {
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = useLoaderData() as Hero;
    const navigate = useNavigate();

    return (
        <div className="hero-info fadeIn-left">
            <img
                className="hero-info__picture"
                src={`/heroes/${id}.jpg`}
                alt={`Avatar ${superhero}`}
            />
            <div className="hero-info__description">
                <h1>{superhero}</h1>
                <div className="hero-info__alterego">
                    <span>Alter Ego: </span>
                    {alter_ego}
                </div>
                <hr />
                <div className="hero-info__publisher">
                    <span>Publisher: </span>
                    {publisher}
                </div>
                <hr />
                <div className="hero-info__first-appearance">
                    <span>First Appearance: </span>
                    {first_appearance}
                </div>
                <hr />
                <div className="hero-info__characters">
                    <span>Characters: </span>
                    {characters}
                </div>
                <br />
                <button onClick={() => navigate(-1)}>Return</button>
            </div>
        </div>
    );
};

export default HeroInfo;
