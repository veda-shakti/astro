import React, {useEffect} from 'react';
import '../../Styles/ContentPhoneBorderInfo.css'
import '../../Styles/content.css'
import '../../Styles/ContentInline.css'
import point from '../../assets/point.svg'

const Contentinline = (props) => {

    useEffect(() => {
        const mainFrame = document.getElementById(`content${props.contentid}`);
        const scroll = mainFrame.querySelector(".scrolldiv");


        function handleHorizontalScroll(e) {
            if (window.innerWidth < 320 || window.innerWidth > 960) {
                if (!props.animating && props.currentframe.id === "content9") {
                    let scrollAmount = 0;
                    const slideTimer = setInterval(function(){
                        scroll.scrollLeft += e.deltaY / 10;
                        scrollAmount += 20;
                        if(scrollAmount >= 100){
                            window.clearInterval(slideTimer);
                        }
                    }, 25);
                }
            }
        }

        // Проверка ширины окна
        if (window.innerWidth < 320 || window.innerWidth > 960) {
            document.addEventListener('wheel', handleHorizontalScroll);
        }

        return () => {
            document.removeEventListener('wheel', handleHorizontalScroll);
        };
    }, [props.contentid, props.animating, props.currentframe]);


    return (
        <div className="absolute">
            <div className="content inlinecontent" id={`content${props.contentid}`}>
                <div className="contentblock horizonral">
                    <div className="frame5_block inlineframe">
                        <h4 className="frame5_block_h4">
                            Пункты назначения вебинара
                            «Астропрогноз на 2024 год»:
                        </h4>
                            <div className="scrolldiv horizontal" id={`scroll${props.contentid}`}>
                            <div className="inline_listblock">

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Эмоциональная Стабильность</h5>
                                    <p className="inline_p">Узнайте астрологические тенденции и события для вашего психологического и  эмоционального спокойствия.</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Профессиональный и Финансовый Рост</h5>
                                    <p className="inline_p">Планируйте и реализуйте действия для карьерного прорыва и инвестиций.</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Продуктивное Планирование</h5>
                                    <p className="inline_p">Узнайте, как и когда планировать важные для вас события (крупные покупки, инвестиции, обучение, отдых, здоровье).</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Защита для семьи</h5>
                                    <p className="inline_p">Будьте в курсе возможных негативных периодов и турбулентностей по знаку зодиака для себя и близких.</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Мотивация и Вдохновение</h5>
                                    <p className="inline_p">Получите позитивный заряд на целый год и рекомендации для действий и личного развития.</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Здоровье и Красота</h5>
                                    <p className="inline_p">Узнайте неподходящие периоды для медицинских процедур и косметических вмешательств.</p>
                                </div>

                                <div className="inline_block">
                                    <img src={point} alt="" className="inline_img"/>
                                    <h5 className="inline_h5">Долгосрочный Результат</h5>
                                    <p className="inline_p">Применяйте регулярно в течении года астропланирование и заложите положительные изменения на несколько лет вперёд.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contentinline;