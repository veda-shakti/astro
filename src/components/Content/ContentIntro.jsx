import React from 'react';
import '../../Styles/content.css';

const ContentIntro = (props) => {
        return (
            <div className="content intro" id={`content${props.contentid}`}>
                <div className="scrolldiv"></div>
                <div className="contentblock"></div>
                {props.contentvalue}
            </div>
        );
};

export default ContentIntro;