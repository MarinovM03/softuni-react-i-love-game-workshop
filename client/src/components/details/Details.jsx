import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import baseUrl from "../../utils/baseUrl";

export default function Details() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/${gameId}`)
            .then(response => response.json())
            .then(result => setGame(result))
            .catch(err => alert(err.message));
    }, [gameId]);

    const deleteGameHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete game: ${game.title}`);

        if (!isConfirmed) {
            return;
        }

        try {
            await fetch(`${baseUrl}/${gameId}`, {
                method: 'DELETE',
            });

            navigate('/');
        } catch (err) {
            alert('Unable to delete game: ', err.message);
        }
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>

            <div className="info-section">
                <div className="header-and-image">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />

                    <div className="meta-info">
                        <h1 className="game-name">{game.title}</h1>

                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{game.genre}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{game.players}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{game.date}</span>
                        </p>
                    </div>

                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">
                            {game.summary}
                        </p>
                    </div>
                </div>

                {/* <!-- Edit/Delete buttons (Only for creator of this game) --> */}
                <div className="buttons">
                    <Link to="#" className="button">Edit</Link>
                    {/* <Link to={`/games/${gameId}/delete`} className="button">Delete</Link> */}
                    <button className="button" onClick={deleteGameHandler}>Delete</button>
                </div>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: A masterpiece of world design, though the boss fights are brutal.</p>
                        </li>
                        <li className="comment">
                            <p>Content: Truly feels like a next-gen evolution of the Souls formula!</p>
                        </li>
                    </ul>

                    {/* <!-- Display paragraph: If there are no comments --> */}
                    {/* <!-- <p className="no-comment">No comments.</p> --> */}
                </div>
            </div>

            {/* <!-- Add Comment (Only for logged-in users, which are not creators of the current game) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}