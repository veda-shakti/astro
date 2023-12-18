import React from 'react';
import '../Styles/background.css';
import telegram from '../assets/telegram_social.svg'
import insta from '../assets/insta_social.svg'
// import {FacebookPixel, YandexMetrica} from "./Included/Metrics";

const BackgroundBox = (props) => {
    const openInstagram = () => {
        window.open("https://www.instagram.com/p/CWn2xYYscg_/", "_blank");
    };

    return (
        <div className={`box ${props.bg}`} id={`box1`}>
            {props.children}


            <div className="SocialButtons">
                <img alt="instagram" className="mediabutton" src= {insta} onClick={openInstagram} />
                <img alt="telegram" className="mediabutton" src= {telegram} />
            </div>

            <footer id="footer">
                <div className="column">
                    <a href="./src/assets/ofert_doc_ua.pdf">Договор-оферты</a>
                </div>
                <div className="column column2">
                    <a href="https://www.instagram.com/p/CWn2xYYscg_/">@ANASTASIASHAKTI</a>
                </div>
                {/* <YandexMetrica/>
                <FacebookPixel/> */}
            </footer>
        </div>
    );
};

export default BackgroundBox;