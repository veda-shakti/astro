import React, {useContext, useEffect, useState} from 'react';
import '../../Styles/ModalFornPay.css'
import ModalContext from "./ModalContext";
const ContactFormPay = () => {

    const { showModal, setShowModal } = useContext(ModalContext);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [renderModal, setRenderModal] = useState(false);
    const [showClass, setShowClass] = useState(false);

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        // Здесь вы можете обработать данные формы, например, отправить их на сервер
        setFormState({ name: '', secondName: '', email: '' });
        // setShowModal(false);
        window.open('https://pay.fondy.eu/s/5cN5EO9El', '_blank');
    };

    useEffect(() => {
        let timeoutId;

        if (showModal) {
            setRenderModal(true);
            timeoutId = setTimeout(() => setShowClass(true), 100);
        } else {
            setShowClass(false);
            timeoutId = setTimeout(() => setRenderModal(false), 300);
        }

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timeoutId);
    }, [showModal]);

    return (
        <div>
            {renderModal && (
                <div className={`modal ${showClass ? 'show' : ''}`}>
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        {/*<form onSubmit={handleSubmit} action="https://api.fondy.eu/api/checkout/redirect/" method="post">*/}
                        <form action="https://api.fondy.eu/api/checkout/redirect/" method="post">
                            <h2>Форма регистрации</h2>
                            <p>После заполнения формы регистрации Вас переведёт на страницу оплаты. Далее Вам на почту придут инструкции и ссылка для подключении к чату в Telegram. Отправляя форму, вы соглашаетесь с <a href="/politika">политикой конфиденциальности</a>.</p>
                                <label>
                                    <input className="name-field first" type="text" name="name" placeholder="Имя" value={formState.name} onChange={handleInputChange}  />
                                </label>
                                <label>
                                    <input className="name-field second" type="text" name="secondName" placeholder="Фамилия" value={formState.secondName} onChange={handleInputChange}  />
                                </label>
                            <label>
                                <input type="email" name="email" placeholder="Почта*" value={formState.email} onChange={handleInputChange} required />
                            </label>
                            <input className="button-submit" type="submit" value="Перейти к оплате" />
                            <input type="hidden" name="order_id" value="your_order_id" />
                            <input type="hidden" name="merchant_id" value="Инфа от Анастасии" />
                            <input type="hidden" name="order_desc" value="Буст в жизнь" />
                            <input type="hidden" name="amount" value="600000" /> <!-- Сумма в копейках -->
                            <input type="hidden" name="currency" value="UAH" />
                            <input type="hidden" name="signature" value="your_generated_signature" />
                            <input type="hidden" name="response_url" value="your_response_url" />
                            <input type="hidden" name="server_callback_url" value="your_server_callback_url" />
                            <input type="submit" value="Оплатить 6000 грн" />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactFormPay;