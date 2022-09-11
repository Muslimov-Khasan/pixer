import './Form.scss'

function Form() {
    return (
        <>
          <section className='forms' >
            <h2 className="form__title">Buyurtma berish</h2>
            <p className="form__word">Na o'rta maktab, na o'rta maktab va na basketbol. Uy kamondan muhimroqdir. Laciniyadan oson</p>

            <form className="form">
                <input className="input__name" type="text" placeholder='Ismgizni Kirting'/>
                <input className="input__name" type="text" placeholder='Telefon raqamingiz'/>
                <select className="select">
                    <optgroup label="Xizmat turi">Xizmat turi</optgroup>
                    <option value="Telegram bot">Telegram bot</option>
                    <option value="Web-sayit Yaratish">Web-sayit Yaratish</option>
                    <option value="Smm">Smm</option>
                    <option value="Grafik dizayn">Grafik dizayn</option>
                    <option value="CRM tizimlar">CRM tizimlar</option>
                </select>
			<button className="form__btn">Buyurtma berish</button>
            </form>
            </section>
        </>
    )
}

export default Form;