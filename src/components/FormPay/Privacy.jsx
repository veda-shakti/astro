import React, {useEffect} from 'react';
import '../../Styles/Privacy.css'
const Privacy = ({ isVisible, setShowPrivacy }) => {
    useEffect(() => {

        let currentTranslateY = 0;

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
                scrollprivacy('up');
            }
            else {
                /* свайп вниз */
                scrollprivacy('down');
            }
        }

        function scrollwheel(e){
            const direction = e.deltaY > 0 ? 'up' : 'down';
            scrollprivacy(direction);
        }

        function scrollprivacy(direction) {
            const scrollContainer = document.querySelector('.privacy');
            const scrollAmount = 100; // Измените это значение в соответствии с желаемым количеством прокрутки
            console.log ((currentTranslateY * -1) + (window.innerHeight * 0.5));

            if (direction === 'up' && currentTranslateY > -(scrollContainer.offsetHeight - window.innerHeight * 0.5)) {
                currentTranslateY -= scrollAmount;
            } else if (direction === 'down' && currentTranslateY < 0) {
                currentTranslateY += scrollAmount;
            }

            // Ограничиваем currentTranslateY, чтобы предотвратить прокрутку за пределы элемента
            currentTranslateY = Math.max(-(scrollContainer.offsetHeight - window.innerHeight * 0.5), currentTranslateY);
            currentTranslateY = Math.min(0, currentTranslateY);

            scrollContainer.style.transform = `translateY(calc(50vh + ${currentTranslateY}px))`;
        }

        window.addEventListener('wheel', scrollwheel);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', scrollwheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);
    return (
        <div className={`privacy ${isVisible ? 'visible' : ''}`}>
            <span className="close" onClick={() => setShowPrivacy(false)}>&times;</span>
            <h2>Политика конфиденциальности</h2>
            <h3>1. Положение</h3>
            <p></p>

        </div>
    );
};

export default Privacy;