import React from 'react';
import erroricon from "../../assets/iconerror.svg";

const Errorwindow = (props) => {
    return (
        <div className="error">
            <h2>Упс! Оплата не удалась...</h2>
            <img className="icon" src={erroricon} alt="success"/>
            <p className="description">Попробуйте ещё раз, кликнув по кнопке.</p>
            {props.button}
        </div>
    );
};

export default Errorwindow;