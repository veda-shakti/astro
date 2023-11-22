import React from 'react';
import '../../Styles/content.css';

const ContentIntroPhone = (props) => {
        return (
            <div className="absolute">
                <div className="content introphone" id={`content${props.contentid}`}>
                    <div className="scrolldiv">
                    {props.contentvalue}
                    <div className="frame2_block contentblock">
                        <img src={props.imgSrc} alt="emblem" className="frame2_block_img"></img>
                        <p className="frame2_block_time">{props.time}</p>
                        <h1 className="frame2_block_h1">{props.title}</h1>
                        <p className="frame2_block_p">{props.description}</p>
                        <button className="reg">{props.buttonText}</button>
                        <div className="buttons">
                            {props.tags.map(tag =>
                                <div className="buttons_child">{tag}</div>
                            )}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    };

export default ContentIntroPhone;