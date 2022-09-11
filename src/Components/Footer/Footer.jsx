import './Footer.scss'

function Footer() {
    return (
        <>
            <footer className='footer'>
            <div className="container">
            <div className="site-info">
                <a className="site__info-link"
                    href="#link">
                    <h3 className="footer-title">
                        Copyright 2020
                    </h3>
                </a>
                <p className="footer__text">Na o'rta maktab, na o'rta maktab va na basketbol. Uy kamondan muhimroqdir. Laciniyadan oson chiqib ketish uchun u bolalarning massasiga g'amxo'rlik qilishi kerak. Viva mattis eros va sem pulvinar tincidunt.</p>
            </div>

            <div className="footer-page">
                <h3 className="footer__title-sayt">
                    Sayt sahifalari
                </h3>

                <ul class="page__list">
                    <li className="end-page">
                        <a className="page__link"
                            href="#bosh">
                            Bosh sahifa
                        </a>
                    </li>

                    <li className="end-page">
                        <a className="page__link"
                            href="#xizmatlar.html">
                            Xizmatlar
                        </a>
                    </li>

                    <li className="end-page">
                        <a className="page__link"
                            href="/portfolio">
                            Portfolio
                        </a>
                    </li>

                    <li class="end-page">
                        <a className="page__link"
                            href="/team.html">
                            Jamoa    
                        </a>
                    </li>

                    <li class="end-page">
                        <a className="page__link"
                            href="/blog.html">
                            Blog
                        </a>
                    </li>

                    <li className="end-page">
                        <a className="page__link"
                            href="/contact">
                            Kontaktlar
                        </a>
                    </li>
                </ul>
            </div>

            <div className="network__link">
                <h3 className="footer__good">
                    Biz internetda
                </h3>
                <a className="footer__link"
                    href="#link">
                    Telegram
                </a>

                <a className="footer__link"
                    href="https://www.facebook.com">
                    facebook
                    </a>

                <a className="footer__link"
                    href="https://www.instagram.com">
                    instagram
                </a>
            </div>
            </div>
              
            </footer>
        </>
    )
}

export default Footer;