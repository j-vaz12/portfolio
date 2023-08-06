import "./ContactPage.css"
import {Link} from 'react-router-dom';

export default function ContactPage() {
    return (
        <div className="contact-container">
            <Link className="link" to="https://github.com/j-vaz12"> 
                <div className="socials">
                    <h1 className="github"> Git-Hub</h1>
                    <p> Come chekout my GitHub 🤩 </p>
                    <img src="" alt="" />
                </div>
            </Link>

            <Link className="link" to="https://www.linkedin.com/in/jason-vasquez-codes/"> 
                <div className="socials">
                    <h1 className="linkedin"> Linkten</h1>
                    <p> Lets connect on Liknten 😄</p>
                    <p>jason-vasquez-codes </p>
                </div>
            </Link>

            <div className="socials">
                <h1> Email</h1>
                <li> jasonvasquezx@gmail.com </li>
            </div>
        </div>
    );
}