import './Hero.scss';
import Vebsayt from '../../Assets/Images/website.png';
import Telegram from '../../Assets/Images/telegerambot.png';
import Smm from '../../Assets/Images/smm-illustration.png';
import Dezayn from '../../Assets/Images/design-illustration.png';
import CRM from '../../Assets/Images/crm-illustration.png';

function Hero() {
	return (
		<div className="container">
		<div className="hero">
			  <h2 className="hero__titel">Biznesingizni keyingi bosqichga olib chiqing</h2>
			  <p className="hero__word">Biznesingizni keyingi bosqichga olib chiqing AQSH Davlat kotibi Entoni Blinken kutilmagan tashrif bilan Kiyevga keldi</p>
			  <a className="hero__sever"href="./index.html">Xizmatlar bilan tanishish</a>
			</div>
			<iframe 
			className="iframe"
					width="458" 
					height="258" 
					src="https://www.youtube.com/embed/6_pru8U2RmM?start=13"
					title="YouTube video player" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					allowfullscreen
				></iframe>
		</div>
	);
}

function Mero() {
	return(
		<>
		<h2 className="servers__title">Xizmatlar</h2>
		<p className="servers__word">Biz butun dunyo boʻylab korxonalarga dasturiy taʼminotni integratsiyalashuv xizmatlari orqali bogʻlangan ekotizimlarni yaratishda yordam beramiz. Maxsus va platformaga asoslangan yechimlarni birlashtirib, biz tartibga solish va masshtablashtirish oson bo'lgan yaxshi muvofiqlashtirilgan muhitlarni shakllantiramiz.</p>

		<div className="container">
		<ul className="servers__list">
			<li className="servers__item">
				<img src={Vebsayt} alt="Telegram bot" width={200}/>
				<h3>Vebsayt tuzish</h3>
				<p>Vebsayt Tuzish</p>
			</li>

			<li className="servers__item">
				<img src={Telegram} alt="Telegram bot" width={200}/>
				<h3>Telegram Bot</h3>
				<p>Telegram Bot Tuzish</p>
			</li>

			<li className="servers__item">
				<img src={Smm} alt="Telegram bot" width={200}/>
				<h3>Smm</h3>
				<p>Smm Tuzish</p>
			</li>

			<li className="servers__item">
				<img src={Dezayn} alt="Telegram bot" width={200}/>
				<h3>Design</h3>
				<p>Design Tuzish</p>
			</li>

			<li className="servers__item">
				<img src={CRM} alt="Telegram bot" width={200}/>
				<h3>CRM tizm</h3>
				<p>CRM Tuzish</p>
			</li>
		</ul>
		
		</div>
		<div className="container">
			<div className="servers__buttons">
			<button className="buy__button">Buyurtma berish</button>
			<a className="buy__link" href="#Buy">Xizmatlar sahifasiga o'tish</a>
			</div>
		</div>
		</>
	)
}
export default { Hero, Mero };
