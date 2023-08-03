import {Link} from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
    return (
        <nav className="nav-container">
            <div className="nav-oval">
                <Link to="About-Me" className="nav-link"> About Me</Link>
                <Link to="Projects" className="nav-link"> Projects</Link>
                <Link to="Contact" className="nav-link"> Contact</Link>
            </div>
        </nav>
    )
}