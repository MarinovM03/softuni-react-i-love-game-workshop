import { useEffect, useState } from "react";
import Game from "../game/Game";

const BASE_URL = 'http://localhost:3030/jsonstore/games';

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(BASE_URL);
                const result = await response.json();
    
                setGames(Object.values(result));
            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            <div className="catalog-container">

                {games.map(game => <Game key={game._id} {...game} />)}

            </div>

            {/* <!-- Display paragraph: If there is no games  --> */}
            {/* <!-- <h3 className="no-articles">No Added Games Yet</h3> --> */}
        </section>
    );
}