import { Route, Routes } from "react-router";

function App() {
    return (
        <>
            <header>
                {/* <!-- Navigation --> */}
                <nav>
                    <a className="home" href="#">
                        <img src="./images/logo.png" alt="logo" />
                    </a>
                    <a href="#">Catalog</a>
                    {/* <!-- Logged-in users --> */}
                    <div id="user">
                        <a href="#">Add Game</a>
                        <a href="#">Logout</a>
                    </div>
                    {/* <!-- Guest users --> */}
                    <div id="guest">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </nav>
            </header>

            {/* <!-- Home Page --> */}
            <section id="welcome-world">
                <div className="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in </h3>
                    <img id="logo-left" src="./images/logo.png" alt="logo" />
                </div>

                <div id="home-page">
                    <h1>Latest Games</h1>
                    <div id="latest-wrap">
                        {/* <!-- Display div: with information about every game (if any) --> */}
                        <div className="home-container">
                            <div className="game">
                                <img src="./images/witcher.png" alt="Elden Ring" />
                                <div className="details-overlay">
                                    <p className="name">The Witcher 3</p>
                                    <p className="genre">Open World</p>
                                    <button className="details-button">Details</button>
                                </div>
                            </div>

                            <div className="game">
                                <img src="./images/elden ring.png" alt="Elden Ring" />
                                <div className="details-overlay">
                                    <p className="name">Elden Ring</p>
                                    <p className="genre">Action RPG</p>
                                    <button className="details-button">Details</button>
                                </div>
                            </div>

                            <div className="game">
                                <img src="./images/minecraft.png" alt="Minecraft" />
                                <div className="details-overlay">
                                    <p className="name">Minecraft</p>
                                    <p className="genre">Sandbox</p>
                                    <button className="details-button">Details</button>
                                </div>
                            </div>

                            {/* <!-- Display paragraph: If there is no games  --> */}
                            {/* <!-- <p className="no-articles">No games yet</p> --> */}
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p className="center-text">React Course Exercise @ SoftUni &trade;</p>
            </footer>
        </>
    );
}

export default App