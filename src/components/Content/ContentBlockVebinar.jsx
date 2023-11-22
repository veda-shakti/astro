import React from 'react';
import '../../Styles/ContentBlockVebinar.css'
const ContentBlockVebinar = (props) => {
    return (
        <div className="absolute">
        <div className="content blockvebinar" id={`content${props.contentid}`}>
            <div className="scrolldiv" id={`scroll${props.contentid}`}>
            <div className="contentblock">
            <h2 className="vebinar_title">
                {props.title}
            </h2>
                <p className="vebinar_info">
                    {props.description}
                </p>
                <div className="vebinar_block">
                    <h3 className="vebinar_block_h3">Вебинар «Астропрогноз на 2024 год»</h3>
                    <p className="vebinar_block_description"> Время начала: 10:00 (UTC+3) <br/>
                                                                Длительность: 2,5 часа</p>
                </div>

                <div className="vebinar_block">
                    <h3 className="vebinar_block_h3">Содержание</h3>
                    <p className="vebinar_block_description">Что будет в течение 2,5 часов?</p>

                    <ul>

                        <li className="vebinar_block_li">
                        Благоприятные даты для бизнес-деятельности — инвестиций, собеседований и найма сотрудников по каждому месяцу</li>

                        <li className="vebinar_block_li">
                        Даты коридоров затмений и рекомендации по планированию деятельности в эти периоды для каждого знака зодиака</li>

                        <li className="vebinar_block_li">
                        Описание всех знаков зодиака с конкретикой по месяцам и сферам жизни, разъяснение тенденций и влияний планет</li>

                        <li className="vebinar_block_li">
                        Рекомендации и даты для участия в благотворительности, которая раскроют ваши духовные способности и преумножит благосостояние</li>

                        <li className="vebinar_block_li">
                        Даты для проведения особенно сильных однодневных постов Экадаши, когда через ограничения в пище можно хорошо приумножить финансы или открыть в них дополнительные возможности</li>

                        <li className="vebinar_block_li">
                        Рекомендации по тому, чем наполнить стол и в каких цветах встречать Новый год для нейтрализации негативных и активации позитивных влияний на 2024 год</li>

                    </ul>
                </div>

                <div className="vebinar_block">
                    <h3 className="vebinar_block_h3">После вебинара</h3>
                    <p className="vebinar_block_description">Материалы, которые вы получите </p>
                    <ul>
                        <li className="vebinar_block_li">
                            Запись вебинара и электронный текстовый документ выдержками и кратким содержанием вебинара, который можно читать на всех устройствах.
                        </li>

                        <li className="vebinar_block_li">
                            Гороскопы для 12 знаков зодиака в 12 видеозаписях, которые включают  общий окрас года (что вам несёт положение и переходы планет в 2024 году) и гороскоп на каждый месяц, учитывая все переходы планет, а также электронный текстовый файл, который можно читать на всех устройствах.
                        </li>

                        <li className="vebinar_block_li">
                            Изображение покровительствующего Божества года для распечатывания.
                        </li>

                        <li className="vebinar_block_li">
                            Текстовый документ с датами начинаний для важных действий в деловой сфере, бизнесе и профессиональной деятельности (заключение контрактов и договоров, проведение деловых встреч, совещаний и переговоров, финансовые операции, инвестиции для преумножения вложений, открытие банковского счёта, найм сотрудников и подписание с ними контракта, устройство на работу, прохождение собеседования, заключение контракта с работодателем, первый рабочий день).
                        </li>

                        <li className="vebinar_block_li">
                            Доступ к закрытому чату в Телеграме, где мы будем каждый месяц отслеживать динамику событий и держать в фокусе точки силы для прихода к концу года с внушительным багажом результатов.
                        </li>
                    </ul>
                </div>
                <button className="reg">Зарегистрироваться</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ContentBlockVebinar;