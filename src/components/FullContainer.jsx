import React from 'react';

const FullContainer = (props) => {
    return (

        <div className="container FullWidth" id={`frame${props.containerid}`}>
            <div className="postcontainerFull" id={`postcontainer${props.containerid}`}>
                    {props.children}
            </div>
        </div>
    );
};

export default FullContainer;