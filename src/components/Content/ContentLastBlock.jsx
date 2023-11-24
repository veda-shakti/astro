import React from 'react';
import '../../Styles/ContentLastBlock.css'
import '../../Styles/content.css'
import emblem  from '../../assets/emblem.png'
const ContentLastBlock = (props) => {
    return (
        <div className="absolute">
            <div className="content lastblock" id={`content${props.contentid}`}>
                <div className="scrolldiv"></div>
                <div className="contentblock"></div>
                    <div className="lastblock_info">
                        <img src={emblem} alt="emblem" className="lastblock_img"></img>
                        <h2 className="lastblock_h2">
                            Приходите на вебинар
                            «Астропрогноз на 2024 год»!
                        </h2>
                        <p className="lastblock_p">
                            Дата проведения: 02.12.2023<br/>
                            Размер вознаграждения: 6000 грн*
                        </p>
                        <button className="lastblock_reg">Зарегистрироваться</button>
                        <p className="lastblock_ps">
                            *При оплате с других стран -  конвертация валюты проходит  автоматически по актуальному курсу НБУ
                        </p>
                    </div>

            </div>
        </div>

);
};

export default ContentLastBlock;