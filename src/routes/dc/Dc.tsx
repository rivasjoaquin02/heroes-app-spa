import { useMemo } from "react";
import HeroesList from "../../components/HeroesList";
import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";

const Dc = () => {
    const heroes = useMemo(() => getHeroByPublisher("DC Comics"), []);

    return (
        <div className="dc">
            <h1>DC Comics - Characters</h1>
            <hr />

            <HeroesList heroes={heroes} />
        </div>
    );
};

export default Dc;
