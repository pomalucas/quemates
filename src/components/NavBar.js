import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink style={{ margin: '0px 10px' }} to="/">Home</NavLink>
            <NavLink style={{ margin: '0px 10px' }} to="/tipo/Mates">Mates</NavLink>
            <NavLink style={{ margin: '0px 10px' }} to="/tipo/Bombillas">Bombillas</NavLink>
            <NavLink style={{ margin: '0px 10px' }} to="/tipo/Yerba">Yerba</NavLink>
            <NavLink style={{ margin: '0px 10px' }} to="/carrito">Carrito</NavLink>
        </nav>
    );
};

export default NavBar;