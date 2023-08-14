import HeroesList from "../../components/HeroesList";

const Dc = () => {
    return (
        <div className="dc">
            <h1>DC Comics - Characters</h1>
            <hr />

            <HeroesList publisher="DC Comics" />
        </div>
    );
};

export default Dc;
