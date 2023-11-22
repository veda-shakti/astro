import React from 'react';
import '../../Styles/ContentPhoneBorderInfo.css'
import '../../Styles/content.css'
const ContentPhoneborderinfo = (props) => {
    return (
        <div className="absolute">
            <div className="content PhoneBorderInfo" id={`content${props.contentid}`}>
                <div className="scrolldiv" id={`scroll${props.contentid}`}>
                    <div className="contentblock">
                <div className="frame5_block">
                    <h4 className="frame5_block_h4">
                        {props.title}
                    </h4>
                    <div className="frame5_block_list">
                        {props.items.map((item, index) => (
                            <div className="border">
                                <h5 key={index} className="frame5_block_h5">
                                    {item}
                                </h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                </div>
        </div>
        </div>
    );
};

export default ContentPhoneborderinfo;