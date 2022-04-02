import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <div className='logo-heading'>Sai Reddy</div>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#b7c9cc" />
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#b7c9cc" />
            </NavLink>
            <NavLink activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#b7c9cc" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/krsvvppnr'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#b7c9cc"/>
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/love4bugs'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#b7c9cc"/>
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.hackerrank.com/sai_btech_svu'
                    >
                        <FontAwesomeIcon icon={faHackerrank} color="#b7c9cc"/>
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.facebook.com/itzmesainarasareddy'
                    >
                        <FontAwesomeIcon icon={faFacebook} color="#b7c9cc"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar