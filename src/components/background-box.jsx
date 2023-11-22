import React from 'react';
import '../Styles/background.css';

const BackgroundBox = (props) => {

    return (

        <div className={`box ${props.bg}`} id={`box1`}>
                {props.children}

            <footer id="footer">
                <div className="column">
                    <a href="#">Договор-оферты</a>
                </div>
                <div className="column column2">
                    <a href="#">@ANASTASIASHAKTI</a>
                </div>
            </footer>

        </div>
    );
};

export default BackgroundBox;