import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header,  bg-dark">
        <h1 className="liteNote">Lite Note</h1>
            <nav className=" navbar bg-dark navbar-expand-lg " >
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                           data-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navContent">
                <ul className="navbar-nav mb-lg-0">
                    <li className=""><NavLink className="nav-link " to="/">Home</NavLink> </li>
                    <li className=""><NavLink className="nav-link " to="/note">Note</NavLink> </li>
                    <li className=""><NavLink className="nav-link " to="/create">Create</NavLink> </li>
                    <li className=""><NavLink className="nav-link " to="/about">About</NavLink> </li>
                </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;