import React, {useContext, useEffect, useState} from 'react';
import '../../Styles/ModalFornPay.css'
import ModalContext from "./ModalContext";
// import Successwindow from "./Successwindow";
// import Errorwindow from "./Errorwindow";
import Privacy from "./Privacy";

const ContactFormPay = () => {
    const {showModal, setShowModal} = useContext(ModalContext);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [renderModal, setRenderModal] = useState(false);
    const [showClass, setShowClass] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    // const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        window.open('https://pay.fondy.eu/s/5cN5EO9El', '_blank');
        return;
        // setLoading(true);

        // // Здесь добавьте логику для генерации order_id и прочих параметров
        // const paymentData = {
        //     order_id: 'some_unique_order_id', // Уникальный ID заказа
        //     order_desc: 'Описание заказа',
        //     amount: 600000,
        //     currency: 'UAH'
        // };

        // let sigData = paymentData;
        // sigData.fondy_secret_key = "8m.6lzDc^Dcp}%27>)wl:xwl^m<:C,z)xHlb2T3Z7J\\/K?ylhekUxT39%Cx[_dr7gi";
        // const queryString = new URLSearchParams(sigData).toString();

        // try {
        //     const response = await fetch(`https://godovoy-astroprognoz.anastasiyashakti.com/index.php?id=12&${queryString}`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });

        //     const responseData = await response.json();

        //     if (responseData.signature) {
        //         // Добавляем подпись к данным формы
        //         paymentData.signature = responseData.signature;

        //         // Отправляем пользователя на страницу Fondy для оплаты
        //         const fondyUrl = `https://pay.fondy.eu/s/1434659?signature=${paymentData.signature}&amount=${paymentData.amount}&currency=${paymentData.currency}&order_id=${paymentData.order_id}&order_desc=${paymentData.order_desc}`;
        //         window.location.href = fondyUrl;
        //     } else {
        //         // Обработка ошибок при получении подписи
        //         console.error('Ошибка при получении подписи:', responseData.error);
        //         // Выведите сообщение об ошибке пользователю
        //     }
        // } catch (error) {
        //     console.error('Ошибка при отправке запроса:', error);
        //     // Выведите сообщение об ошибке пользователю
        // } finally {
        //     setLoading(false);
        // }
    };

    useEffect(() => {
        let timeoutId;

        if (showModal) {
            setRenderModal(true);
            timeoutId = setTimeout(() => {
                setShowClass(true);
            }, 100);
        } else {
            setShowClass(false);
            timeoutId = setTimeout(() => {
                setRenderModal(false);
            }, 300);
        }

        return () => clearTimeout(timeoutId);
    }, [showModal]);

    return (
        <div>
            {renderModal && (
                <div className={`modal ${showClass ? 'show' : ''}`}>
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <h2>Форма регистрации</h2>
                            {/* <p>
                                После заполнения формы регистрации Вас переведёт на страницу оплаты. Далее Вам на почту 
                                придут инструкции и ссылка для подключения к чату в Telegram. Отправляя форму, вы соглашаетесь 
                                с <span className="showprivacy" onClick={() => setShowPrivacy(true)}>политикой конфиденциальности</span>.
                            </p> */}
                            <p>
                                После оплаты Вам на почту придут инструкции и ссылка для подключения к чату в Telegram.
                            </p>
                            <label>
                                {/* <input className="name-field first" type="text" name="name" placeholder="Имя" value={formState.name} onChange={handleInputChange} required /> */}
                                <input className="name-field first" type="hidden" name="name" placeholder="Имя" value={formState.name} onChange={handleInputChange} />
                            </label>
                            <label>
                                {/* <input className="name-field second" type="text" name="secondName" placeholder="Фамилия" value={formState.secondName} onChange={handleInputChange} required /> */}
                                <input className="name-field second" type="hidden" name="secondName" placeholder="Фамилия" value={formState.secondName} onChange={handleInputChange} />
                            </label>
                            <label>
                                {/* <input type="email" name="email" placeholder="Почта*" value={formState.email} onChange={handleInputChange} required /> */}
                                <input type="hidden" name="email" placeholder="Почта*" value={formState.email} onChange={handleInputChange} />
                            </label>
                            {/* <input className="button-submit" type="submit" value="Перейти к оплате" disabled={loading} /> */}
                            <input className="button-submit" type="submit" value="Перейти к оплате"/>
                        </form>
                        {showPrivacy && <Privacy isVisible={showPrivacy} setShowPrivacy={setShowPrivacy} />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactFormPay;