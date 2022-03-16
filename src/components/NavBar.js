import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/categoria/1">Mates</NavLink>
            <NavLink to="/categoria/2">Bombillas</NavLink>
            <NavLink to="/categoria/3">Yerba</NavLink>
            <NavLink to="/carrito">carrito</NavLink>
        </nav>
    );
};

export default NavBar;