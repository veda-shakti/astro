import React from 'react';
import '../Styles/background.css';

const BackgroundBox = (props) => {
    const handleLinkClick = (e) => {
        e.preventDefault();
        // Здесь вы можете добавить действия, которые должны происходить при клике на ссылку
    };

    return (
        <div className={`box ${props.bg}`} id={`box1`}>
            {props.children}

            <footer id="footer">
                <div className="column">
                    <a href="#" onClick={handleLinkClick}>Договор-оферты</a>
                </div>
                <div className="column column2">
                    <a href="#" onClick={handleLinkClick}>@ANASTASIASHAKTI</a>
                </div>
            </footer>
        </div>
    );
};

export default BackgroundBox;