import React, { useEffect, useState} from 'react';
import * as Frames from "./components/Frames/frames";
import BackgroundBox from "./components/background-box";
import Meta from "./components/Meta";
import ContactFormPay from "./components/FormPay/ContactFormPay";
import ModalContext from "./components/FormPay/ModalContext";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [currentFrameIndex=0, setCurrentFrameIndex] = useState(0);
    let shouldswitch = true;




    useEffect(() => {
        const frames = document.querySelectorAll('.content');
        setCurrentFrame(frames[currentFrameIndex]);

        function handleTouchStart(e) {
            // Сохранение начальной точки касания
            this.touchStartY = e.touches[0].clientY;
        }

        function handleTouchMove(e) {
            // Вычисление направления свайпа
            const touchEndY = e.changedTouches[0].clientY;
            const yDiff = this.touchStartY - touchEndY;
                if (yDiff > 0) {
                    /* свайп вверх */
                    handleScroll('up');
                } else {
                    /* свайп вниз */
                    handleScroll('down');
                }
            // Предотвращение дальнейшего распространения события по умолчанию
            // e.preventDefault();
        }

        function scrollwheel(e){
            if (document.querySelector('.modal')) {;
                return;
            }
            // e.preventDefault();
            const direction = e.deltaY > 0 ? 'up' : 'down';
            handleScroll(direction);
        }

        async function switchFrames(nextFrame, thisframe, direction) {
            const currentTranslate = direction === 'up' ? '-100vh' : '100vh';
            const nextInitialTranslate = direction === 'up' ? '100vh' : '-100vh';

            nextFrame.style.transform = `translateY(${nextInitialTranslate})`;
            nextFrame.style.opacity = '1';
            nextFrame.style.pointerEvents = 'auto';
            thisframe.style.opacity = '0';
            thisframe.style.pointerEvents = 'none';

            await new Promise(resolve => requestAnimationFrame(resolve));

            nextFrame.style.transform = 'translateY(0vh)';
            thisframe.style.transform = `translateY(${currentTranslate})`;

            await new Promise(resolve => {
                nextFrame.addEventListener('transitionend', resolve, {once: true});
            });
        }
        function switchFrame(direction) {
            if (shouldswitch) {

                // Определение следующего кадра в зависимости от направления прокрутки
                let nextFrameIndex;

                if (direction === 'up') {
                    if (currentFrameIndex === frames.length - 1) {
                        return;
                    } // Если это последний элемент, прекратить прокрутку
                    nextFrameIndex = currentFrameIndex + 1;
                } else {
                    if (currentFrameIndex === 0) {
                        return; // Если это первый элемент, прекратить прокрутку
                    }
                    nextFrameIndex = currentFrameIndex - 1;
                }

                const nextFrame = frames[nextFrameIndex];

                if (nextFrame && !animating) {
                    setAnimating(true);
                    setCurrentFrameIndex(nextFrameIndex);

                    switchbg(nextFrameIndex, direction);

                    // Обновление индекса здесь
                    switchFrames(nextFrame, currentFrame, direction).then(() => {
                        setAnimating(false);
                        setCurrentFrame(nextFrame);
                    });
                }
            }
        }
        function handleScroll(direction) {
            // Определение направления прокрутки


            const scroll = currentFrame.querySelector('.scrolldiv');
            const block = currentFrame.querySelector('.contentblock');
            const container = currentFrame.parentElement.parentElement;

            if ((scroll.scrollHeight >= container.offsetHeight && block.offsetHeight > 500) && (container.offsetHeight !== 0)) {
                if (animating)
                    return;
                if (window.innerWidth < 320 || window.innerWidth > 960) {
                    if (direction === 'up') {
                        let scrollAmount = 0;
                        const slideTimer = setInterval(function(){
                            scroll.scrollTop +=  5;
                            scrollAmount += 10;
                            if(scrollAmount >= 100){
                                window.clearInterval(slideTimer);
                            }
                        }, 10);
                    } else {
                        let scrollAmount = 0;
                        const slideTimer = setInterval(function(){
                            scroll.scrollTop -= 5;
                            scrollAmount += 10;
                            if(scrollAmount >= 100){
                                window.clearInterval(slideTimer);
                            }
                        }, 10);
                    }
                }

                if (
                    (direction === 'up' && (scroll.scrollTop+20 >= block.offsetHeight - container.offsetHeight))
                    ||
                    (direction === 'down' && scroll.scrollTop === 0)
                ) {
                    if (!shouldswitch){
                        setTimeout(() => {
                            shouldswitch = true;
                        }, 200);
                    }
                    switchFrame(direction);
                }
                if (shouldswitch) {
                    shouldswitch = false;
                }

            } else {
                if (container.offsetWidth<block.offsetWidth) {
                    if (animating)
                        return;

                    if (
                        (direction === 'up' && (scroll.scrollLeft >= block.offsetWidth - container.offsetWidth))
                        ||
                        (direction === 'down' && scroll.scrollLeft === 0)
                    )
                    {
                        if (!shouldswitch){
                            setTimeout(() => {
                                shouldswitch = true;
                            }, 300);
                        }
                        switchFrame(direction);
                    }
                    if (shouldswitch) {
                            shouldswitch = false;
                        }

                }
                switchFrame(direction);
            }
        }
        async function switchbg (index,direction) {
            const isCosmos1 = index < 5;
            const isCosmos2 = index > 7
            const isPhone1 = index >= 1;
            const isPhone2 = index > 7 ;
            const isMoney = index >= 5 && index < 7;
            const isFullWidth = index === 7;
            const lastframe = index === 11;


            if (isCosmos1) {
                document.getElementById('box1').classList.add('cosmos');
            } else {
                document.getElementById('box1').classList.remove('cosmos');
            }

            if (isCosmos2) {
                document.getElementById('box1').classList.add('cosmos2');
            } else {
                document.getElementById('box1').classList.remove('cosmos2');
            }

            if (isPhone1) {
                if (index === 1 && direction === "up") {
                    switchFrames(document.getElementById('frame2'), document.getElementById('frame1'), direction);
                }
            } else {
                switchFrames(document.getElementById('frame1'), document.getElementById('frame2'), direction)
            }

            if (isMoney) {
                document.getElementById('box1').classList.add('money');
            } else {
                document.getElementById('box1').classList.remove('money');
            }

            if (isFullWidth) {
                document.getElementById('box1').classList.add('fullwidthbg');
                if (direction === "up") {
                    switchFrames(document.getElementById('frame3'), document.getElementById('frame2'), direction);
                } else {
                    switchFrames(document.getElementById('frame3'), document.getElementById('frame4'), direction);
                }
            }
            else {
                document.getElementById('box1').classList.remove('fullwidthbg');
                if (direction === 'down' && index === 6) {
                    switchFrames(document.getElementById('frame2'), document.getElementById('frame3'), direction)
                }
                if (isPhone2) {
                    switchFrames(document.getElementById('frame4'), document.getElementById('frame3'), direction)
                }
            }
            if (lastframe) {
                document.getElementById('box1').classList.add('fullwidthbg');
                document.getElementById('frame4').classList.add('lastphone');
                document.getElementById('footer').style.opacity = '1';
                document.getElementById('footer').style.transform = `translateY(0)`;
            } else {
                if (!isFullWidth) {
                    document.getElementById('box1').classList.remove('fullwidthbg');
                }
                document.getElementById('frame4').classList.remove('lastphone');
                document.getElementById('footer').style.opacity = '0';
                document.getElementById('footer').style.transform = `translateY(100vh)`;
            }


        }

        window.addEventListener('wheel', scrollwheel);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', scrollwheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [currentFrame, currentFrameIndex, animating]);


    return (
        <div className="App">
            <ModalContext.Provider value={{ showModal, setShowModal }}>

            <Meta/>
            <BackgroundBox
            bg="cosmos">

                <Frames.Frame1/>
                <Frames.Frame2/>
                <Frames.Frame3/>
                <Frames.Frame4
                    animating={animating}
                    currentframe = {currentFrame}/>

            </BackgroundBox>
                <ContactFormPay />
            </ModalContext.Provider>
        </div>
    );
}

export default App;
