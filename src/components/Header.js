import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    return (
        <header>
            <Link to="/">
                <h1>quemates</h1>
            </Link>
            <NavBar/>
        </header>
    )
}

export default Header