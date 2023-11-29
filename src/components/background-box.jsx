import React from 'react';
import '../Styles/background.css';
// import {FacebookPixel, YandexMetrica} from "./Included/Metrics";

const BackgroundBox = (props) => {
    return (
        <div className={`box ${props.bg}`} id={`box1`}>
            {props.children}

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