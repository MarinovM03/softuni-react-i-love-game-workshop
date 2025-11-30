import { useEffect, useState } from "react";
import GameCard from "../game-card/GameCard";

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games')
            .then(response => response.json())
            .then(result => {
                const resultGames = Object.values(result)
                    .sort((a, b) => b._createdOn - a._createdOn)
                    .slice(0, 3);

                setLatestGames(resultGames);
            })
            .catch(err => alert(err));
    }, []);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="./images/logo.png" alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">
                    <div className="home-container">
                        {latestGames.length === 0 && <p className="no-articles">No games yet</p>}

                        {latestGames.map(game => <GameCard key={game._id} {...game} />)}

                    </div>
                </div>
            </div>
        </section>
    );
}