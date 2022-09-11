import './Header.scss';
import Logo from '../../Assets/Images/pixer-logo.svg';
function Header() {
	return (
		<header className="header">
        <div className="container">
        <a  href="#Link">
            <img className="logo" src={Logo} alt="logo"   width="59" height="20"/>
        </a>
        <nav className="nav">
            <ul className="nav__list">
            <li className="nav__item"><a  className="nav__link" href='#link'>Bosh Sahifa</a></li>
              <li className="nav__item"><a className="nav__link"  href='#link'>Xizmatlar</a></li>
              <li className="nav__item"><a className="nav__link"  href='#link'>Portfolio</a></li>
              <li className="nav__item"><a className="nav__link"  href='#link'>Jamoa</a></li>
              <li className="nav__item"><a className="nav__link"  href='#link'>Blog</a></li>
              <li className="nav__item"><a className="nav__link"  href='#link'>Kontaktlar</a></li>
               <div className="telphone">
              <a href="tel+998909213711" className="telephone">+998 90 921 37 11</a>
            </div>
            </ul>
        </nav>

       
        </div>
    </header>
	);
}

export default Header;
