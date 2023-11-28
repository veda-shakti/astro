import React from 'react';
import '../../Styles/ModalFornPay.css'
import successicon  from '../../assets/icon.svg'

const Successwindow = () => {
    return (
        <div className="success">
            <h2>Оплата прошла успешно!</h2>
            <img className="icon" src={successicon} alt="success"/>
            <p className="descriproin">Уже отправляем Вам на почту дальнейшие инструкции.<br/> Спасибо за доверие!</p>
        </div>
    );
};

export default Successwindow;