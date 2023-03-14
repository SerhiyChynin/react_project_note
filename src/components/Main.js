import { NavLink } from "react-router-dom";
function Main() {
    return (
        <div className="main_elem navbar-dark bg-dark">
            <div>
                <NavLink className="nav-link" to="/create">Create Note </NavLink>
            </div>
            <div>
                <NavLink className="nav-link" to="/note">Note </NavLink>

            </div>
        </div>
    );
}

export default Main;