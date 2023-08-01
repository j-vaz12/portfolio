import {Link} from 'react-router-dom';
export default function NavBar({}) {
    return (
        <nav>
            <Link to="About-Me"> About Me</Link>
            <Link to="About-Me"> Projects</Link>
            <Link to="About-Me"> Contact</Link>
        </nav>
    )
}