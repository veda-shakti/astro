import React, {useEffect} from 'react';
import '../../Styles/contentFeedBack.css'
import '../../Styles/content.css'
const ContentFeedBack = (props) => {
    useEffect(() => {

        function calculateColumnHeight(column) {
            return Array.from(column.children).reduce((acc, child) => acc + child.getBoundingClientRect().height, 0);
        }

        const column1 = document.getElementById("column1");
        const column2 = document.getElementById("column2");
        const blocks = Array.from(document.querySelectorAll(".frame13_content_block"));

        blocks.forEach((block, index) => {
            block.remove();

            const col1Height = calculateColumnHeight(column1);
            const col2Height = calculateColumnHeight(column2);

            if (col1Height <= col2Height) {
                column1.appendChild(block);
            } else {
                column2.appendChild(block);
            }
        });


    }, []);

    return (
        <div className="absolute">
            <div className="frame13 content" id={`content${props.contentid}`}>
                <div className="scrolldiv" id={`scroll${props.contentid}`}>
                    <div className="contentblock">
                <div className="frame13_block">
                    <h2 className="frame13_h2">Что говорят об Астропрогнозе?</h2>
                    <div className="frame13_content">
                        <div className="containerforframe13">
                            <div className="column" id="column1"></div>
                            <div className="column" id="column2"></div>
                        </div>
                        <div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Александра
                            </h5>
                            <p className="frame13_content_block_p">
                                Ощущение доверия миру это именно то состояние,
                                которое я искала в последнее время. И все никак
                                не удавалось его ощутить... Благодарю вас за вашу
                                мудрость, время, и бесценные знания которыми вы
                                делитесь с нами!
                            </p>
                        </div>
                        <div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Катерина
                            </h5>
                            <p className="frame13_content_block_p">
                                Мы с Родом остались дольше сегодня в прочтении
                                мантры и за спиной я почувствовала как меня окутывают
                                мягким пледом... Так спокойно, приятно и я стала
                                маленьким ребёнком, даже мантра читалась детским голосом.
                                Слёзы, я ребёнок и я не одна — вокруг меня много народу и
                                это мой род. Я защищена, могу побыть и ребёнком, и взрослой,
                                и какой угодно, и столько, сколько в этом нуждаюсь. Не
                                нужно себя ломать, становится сразу взрослой и выполнять
                                дела. Можно остаться на «какое-то время» в себе и сделать
                                дела, оперевшись на Род. Фантастические ощущения себя в под
                                защитой предков.
                            </p>
                        </div>
                        <div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Елена
                            </h5>
                            <p className="frame13_content_block_p">
                                Анастасия, благодарю за этот мощный родовой
                                ретрит🙏❤️Это огромнейшая помощь роду и она
                                чувствуется, есть контакт с родом. Очень ценные
                                знания за эти дни получила, которые буду передавать
                                ребенку🙏🌹, БЛАГОДАРЮ 🙏🙏🙏 И  по роду и для
                                успешного проживания этой жизни❤️
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                </div>
        </div>
    </div>

    );
};

export default ContentFeedBack;