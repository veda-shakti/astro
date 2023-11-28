import React, {useEffect, useState} from 'react';
import '../../Styles/contentFeedBack.css'
import '../../Styles/content.css'
const ContentFeedBack = (props) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const apiURL = 'https://godovoy-astroprognoz.anastasiyashakti.com/index.php?id=4';

        fetch(apiURL)
            .then(response => {
                // Проверяем, что ответ успешный
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Устанавливаем полученные данные в состояние компонента
                setReviews(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

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
                        {reviews.map(review => (
                            <div key={review.id} className="review">
                                <h5>{review.title}</h5>
                                <p>{review.content}</p>
                            </div>
                        ))}
                        <div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Александра
                            </h5>
                            <p className="frame13_content_block_p">
                                Я считаю ‚ что знать
                                астрологические тенденции на год
                                вперёд, это не только практично ,
                                но и Разумно . Ведь это целая
                                карта подсказок по всем сферам

                                в жизни . Ведь в наших руках ,
                                взять за это ответственность , и
                                применить полученные знания ‚ а
                                потом еще и получить результат

                                А еще очень помогает ‚ когда
                                знаешь ответы на вопросы по
                                событиям в жизни и вокруг
                                происходящим . Тогда спокойнее
                                внутренняя реакция или уже
                                даёшь соответственную реакцию
                                внешнюю

                                Анастасия ‚ благодарю Вас, за ваш
                                труд и то как щедро вы делитесь с
                                нами знаниями.

                                Ведь за ведической астрологией
                                скрыта такая глубина и духовность
                            </p>
                        </div>
                        <div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Катерина
                            </h5>
                            <p className="frame13_content_block_p">
                                Как и по прогнозу ‚ было очень
                                много работы . Не смотря на
                                физический завал ‚ всё равно
                                сохранила силы и еще успевала
                                много параллельных дел . При
                                этом ‚ в этом году мой доход вырос
                                как никогда ранее ‚ и я понимаю
                                что это еще не предел

                                И насчёт ‚ финансов ‚ я наконец-то
                                реально позволила себе мечтать

                                о крупных покупках движимого и
                                недвижимого имущества

                                Рекомендации применяю для себя,
                                мужа, и близких знакомых ‚ когда
                                понимаю что люди слушают

                            </p>
                        </div>
                        <div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Елена
                            </h5>
                            <p className="frame13_content_block_p">
                                Очень сильно прониклась в этом
                                году Узлом Раху, конечно же
                                благодаря обучению Джйотиш.
                                Зная свои показатели ‚ и период,
                                понимаю что для меня лично Раху
                                принёс много подарков .

                                И так как на днях ось Раху и Кету
                                меняют свои знаки ‚ и заходят в те,
                                как и в моей карте ‚ то понимаю
                                что еще важного много впереди

                                Очень важным и значительным
                                было знакомство с Баладжи

                                Те чувства что испытала ‚ когда мы
                                про Него говорили ‚ не передать
                                словами

                                ОМ НАМО ВЕНКАТЕШАЙА
                            </p>
                        </div>

                        <div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Вероника
                            </h5>
                            <p className="frame13_content_block_p">
                                У меня сейчас все прогнозы:
                                Индивидуальный гороскоп на год,
                                консультация Кармические задачи,
                                консультация по периоду Саде-Сати
                                и Астропрогноз 2023 года. Они как
                                разные части одного пазла -
                                прогноза моей жизни,
                                (стабильности психической,
                                эмоциональной) внешней и
                                внутренней, материальной и
                                духовной

                                Сопоставляю тенденции и понимаю
                                почему у меня внутреннее
                                состояние и внешние ситуации
                                такие, особенно когда треш. Эти
                                пазлы помогают смотреть на все это
                                со стороны и знать, что на подходе
                                очень положительный отрезок
                                времени и это даёт силы, ресурс и
                                правильное распределение планов.
                            </p>
                        </div>

                        <div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Мария
                            </h5>
                            <p className="frame13_content_block_p">
                                Потом ‚ очень полезным был
                                расчет дат помесячный для
                                важных дел, особенно по работе
                                этим пользуюсь постоянно.
                                Например и сейчас вот у меня

                                в ноябре планируется решение
                                важного вопроса, и конечно

                                же даты подобраны уже
                                согласно Вашему расчету. Даже
                                остальные члены семьи всегда
                                спрашивают совета посмотреть
                                можно ли что то делать согласно
                                астропоказателям

                                Ну и была рекомендация
                                отдельная для каждого знака, так
                                это вообще тебе вектор на год,
                                потому что я знаю где, в какой
                                сфере у меня больше всего будет
                                реализаций. И были расставлены
                                соответствующие приоритеты на
                                год, и вот сейчас могу сказать
                                что все я делаю правильно, есть
                                результаты.
                            </p>
                        </div><div className="frame13_content_block">
                            <h5 className="frame13_content_block_name">
                                Виктория
                            </h5>
                            <p className="frame13_content_block_p">
                                Но точно знаю ‚ для меня год был
                                с испытаниями большими ‚ сильно
                                меня поглощала работа и
                                астропрогноз классно помогает,
                                вот смотришь, благоприятно или
                                нет и можно контракт подписать
                                успешный в этот период и т.д .
                                Вообще картинка по году
                                складывается очень классная,
                                после прогноза еще и год
                                не начался, с ты уже понимаешь ,
                                ага ‚ там то, там то и можно
                                планирование небольшое начать
                                создавать

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