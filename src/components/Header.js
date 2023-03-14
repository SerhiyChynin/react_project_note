import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header, navbar-dark, bg-dark">
            <h1 className="liteNote">Lite Note</h1>
            <nav className="nav">
                <ul>
                    <li><NavLink  className="nav-link " to="/">Home</NavLink> </li>
                    <li><NavLink className="nav-link" to="/note">Note</NavLink> </li>
                    <li><NavLink className="nav-link" to="/create">Create</NavLink> </li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink> </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;