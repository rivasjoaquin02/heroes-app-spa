import HeroesList from "../../components/HeroesList";

const Marvel = () => {
    return (
        <div className="marvel">
            <h1>Marvel Comics - Characters</h1>
            <hr />

            <HeroesList publisher="Marvel Comics" />
        </div>
    );
};

export default Marvel;
