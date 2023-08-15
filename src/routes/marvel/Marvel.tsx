import { useMemo } from "react";
import HeroesList from "../../components/HeroesList";
import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";

const Marvel = () => {
    const heroes = useMemo(() => getHeroByPublisher("Marvel Comics"), []);

    return (
        <div className="marvel">
            <h1>Marvel Comics - Characters</h1>
            <hr />

            <HeroesList heroes={heroes} />
        </div>
    );
};

export default Marvel;
