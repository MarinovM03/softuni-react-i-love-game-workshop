import { Link } from "react-router";

export default function Header() {
    return (
        <header>
                <nav>
                    <Link className="home" to="/">
                        <img src="./images/logo.png" alt="logo" />
                    </Link>
                    <Link to="/games">Catalog</Link>
                    {/* <!-- Logged-in users --> */}
                    <div id="user">
                        <Link to="#">Add Game</Link>
                        <Link to="#">Logout</Link>
                    </div>
                    {/* <!-- Guest users --> */}
                    <div id="guest">
                        <Link to="#">Login</Link>
                        <Link to="#">Register</Link>
                    </div>
                </nav>
        </header>
    );
}