import {
    Form,
    useLoaderData,
    useNavigation,
    useSubmit,
} from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroByName";
import HeroesList from "../../components/HeroesList";
import { Hero } from "../../data/data";

import { fakeNetworkDelay } from "../../helpers/fakeNetworkDelay";

export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";

    await fakeNetworkDelay();

    const heroes = await getHeroesByName(q);
    return { heroes, q };
};

const Search = () => {
    const { heroes, q } = useLoaderData() as { heroes: Array<Hero>; q: string };
    const submit = useSubmit();

    const navigation = useNavigation();
    const searching = navigation.state === "loading";
    return (
        <div className="search">
            <Form className="searchbar" role="search">
                <h1>Find: </h1>
                <input
                    id="q"
                    name="q"
                    type="text"
                    placeholder="Find your hero"
                    typeof="search"
                    defaultValue={q}
                    onChange={(e) => submit(e.currentTarget.form)}
                />
                {searching && (
                    <div id="search-spinner" hidden={searching}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="rotate"
                        >
                            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                            <path d="M21 3v5h-5" />
                        </svg>
                    </div>
                )}
            </Form>

            <hr />

            <HeroesList heroes={heroes} />
        </div>
    );
};

export default Search;
