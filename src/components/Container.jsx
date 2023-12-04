import React from 'react';
import '../Styles/container.css';

const Container = (props) => {
        return (
                <div className="container phone" id={`frame${props.containerid}`}>
                    <div className="postcontainer" id={`postcontainer${props.containerid}`}>
                        {props.children}
                    </div>
                    <img className="sparkle" id="sparkle3" src={require("../assets/sparkle.png")} alt="sparkle"></img>
                    <img className="sparkle" id="sparkle4" src={require("../assets/sparkle.png")} alt="sparkle"></img>
                </div>
        )
}
export default Container;