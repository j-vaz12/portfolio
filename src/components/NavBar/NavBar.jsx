import {Link} from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
    return (
        <nav className="nav-links">
            <Link to="About-Me"> About Me</Link>
            <Link to="Projects"> Projects</Link>
            <Link to="Contact"> Contact</Link>
        </nav>
    )
}