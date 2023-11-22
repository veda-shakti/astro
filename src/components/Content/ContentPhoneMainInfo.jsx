import React from 'react';
import '../../Styles/content.css';
import '../../Styles/Frame3.css'

const ContentPhoneMainInfo = (props) => {
    return (
        <div className="content PhoneMainInfo" id={`content${props.contentid}`}>
            <div className="scrolldiv"></div>
            <div className="frame2_block contentblock frame3_block">
                {props.title}
                <p className="frame3_block_p">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default ContentPhoneMainInfo;