import './Serves.scss';
import CRM from '../../Assets/Images/talablar-image.png';
import Mast from '../../Assets/Images/yechimlar-image.png';
import Work from '../../Assets/Images/priect-time.png';
import Good from '../../Assets/Images/quvvatlamoq.png';
import Kubok from '../../Assets/Images/kubok.png';
function Serves() {
    return(
        <>
        <h2 className="we__team">Biz qanday ishlaymiz?</h2>
        <p className="we__word">Texnologlar, strateglar va dizaynerlardan iborat jamoalarimiz kuchli raqamli tajribalarni taqdim etadi. Biz 50 dan ortiq mamlakatlardagi 11 ta sohaga ixtisoslashganmiz va mijozlarimizning eng qiyin muammolariga innovatsion yechimlarni taqdim etamiz. Raqamlar o'zlari uchun gapiradi.</p>
        <div className="container">
        <ol className="choose__list">

        <li className="choose__item">
        <img className="choose__img" src={CRM} alt="Talab" width={300}  height={280}/>
        <div className="choose__texts">
        <h3 className="choose__title">Loyiha uchun vaqt belgilaymiz</h3>
        <p className="choose__word">Chiziqlarga chidamli keramik shisha, oleofob qoplama Har doim yoniq displey</p>
        </div>
        </li>
        
        <li className="choose__item">
        <div className="choose__texts">
        <h3 className="choose__title">Talablarni aniqlab chiqamiz</h3>
        <p>AI yuzni yarata oladimi?</p>
        </div>
            <img src={Mast} alt="Talab" width={300}  height={280}/>
        </li>
        
        <li className="choose__item">
        <img className="choose__img" src={Work} alt="Talab" width={300}  height={280}/>

        <div className="choose__texts">
        <h3 className="choose__title">Talablarni aniqlab chiqamiz</h3>
        <p className="choose__word">Yuz generatori bepulmi?</p>
        </div>
        </li>
        
        <li className="choose__item">
        <div className="choose__texts">
            <h3 className="choose__title">A’lo sifat bilan bajarib topshiramiz</h3>
            <p>AI yuzni yarata oladimi?</p>
            </div>
                <img src={Kubok} alt="Talab" width={300}  height={280}/>
             
            </li>

            <li className="choose__item">
        <img className="choose__img" src={Good} alt="Talab" width={300}  height={280}/>
        
        <div className="choose__texts">
        <h3 className="choose__title">Talablarni aniqlab chiqamiz</h3>
        <p className="choose__word">Yuz generatori bepulmi?</p>
        </div>
        </li>
        </ol>
        </div>
        <div className="servers__buttons">
			<button className="buy__button">Buyurtma berish</button>
			</div>
        </>
        )
    }
    export default Serves;
    