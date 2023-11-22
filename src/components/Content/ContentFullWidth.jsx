import React from 'react';
import '../../Styles/ContentFullWidth.css';
import '../../Styles/content.css'
const ContentFullWidth = (props) => {
    return (
        <div className="absolute">

        <div className="content fullwidthcontent" id={`content${props.contentid}`}>
            <div className="scrolldiv fullwidthscroll" id={`scroll${props.contentid}`}>
                <div className="contentblock">
            <div className="frame8_block">
                <div className="frame8_block_row1">
                    <img src={props.photo} alt="photo Nasti Shackti" className="frame8_block_img"/>
                        <div className="frame8_block_about">
                            <h1 className="frame8_block_h1">Анастасия Шакти</h1>
                            <p className="frame8_block_row1_p">
                                Практик, ведический астролог, мастер по бизнес-астропланированию, восточный психолог, васту мастер, автор и ведущая женских практических онлайн ретритов по гармонизации гороскопа, исцеления судьбы, раскрытию духовного потенциала, целитель вечного — Души.
                            </p>
                        </div>
                </div>
                <div className="frame8_block_row2">
                    <div className="frame8_block_row2_block">
                        <h2 className="frame8_block_row2_h2">Проводник в сакральные знания и практики по:</h2>
                        <ul className="frame8_block_row2_ul">
                            <li className="frame8_block_row2_li">
                                <h5 className="frame8_block_row2_li_h5">самоосвобождению от паттернов, программ, препятствующих счастью в жизни и отношениях</h5>
                            </li>
                            <li className="frame8_block_row2_li">
                                <h5 className="frame8_block_row2_li_h5">выходу на более высокий уровень жизни, комфорта, внутренней целостности и гармонии</h5>
                            </li>
                            <li className="frame8_block_row2_li">
                                <h5 className="frame8_block_row2_li_h5">разрешению сложных жизненных ситуаций</h5>
                            </li>
                        </ul>
                    </div>
                    <div className="frame8_block_row2_block golden">
                        <h2 className="frame8_block_row2_h2">Моя миссия — это:</h2>
                        <ul className="frame8_block_row2_ul">
                            <li className="frame8_block_row2_li">
                                <h5 className="frame8_block_row2_li_h5">упрочнение семей и Родов</h5>
                            </li>
                            <li className="frame8_block_row2_li">
                                <h5 className="frame8_block_row2_li_h5">помощь в кризисных ситуациях в отношениях и бизнесе</h5>
                            </li>
                            <li className="frame8_block_row2_li">
                                <h5 className="frame8_block_row2_li_h5">исцеление женщин, раскрытие их потенциала, материнской созидательной природы через соединение с Богом и путь по-женски</h5>
                            </li>
                            <li className="frame8_block_row2_li">
                                <h5 className="frame8_block_row2_li_h5">процветание всего общества через помощь людям в реализации</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="frame8_block_row3">
                    <div className="frame8_block_row3_container">
                        <div className="frame8_block_row3_block">
                            <h5 className="frame8_block_row3_block_h5">14 лет</h5>
                            <p className="frame8_block_row3_block_p">в практике восточных наук (с 2009 года)</p>
                        </div>
                        <div className="frame8_block_row3_block">
                            <h5 className="frame8_block_row3_block_h5">более 30</h5>
                            <p className="frame8_block_row3_block_p">исцеляющих судьбы ретритов с 2020 г.</p>
                        </div>
                        <div className="frame8_block_row3_block">
                            <h5 className="frame8_block_row3_block_h5">с 2017 года</h5>
                            <p className="frame8_block_row3_block_p">духовная инициация в ведической традиции</p>
                        </div>
                        <div className="frame8_block_row3_block">
                            <h5 className="frame8_block_row3_block_h5">более 2000</h5>
                            <p className="frame8_block_row3_block_p">консультаций</p>
                        </div>
                        <button className="reg">Зарегистрироваться</button>
                    </div>
                </div>
            </div>
                </div>
        </div>
    </div>
        </div>
    );
};

export default ContentFullWidth;