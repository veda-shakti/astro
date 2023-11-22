import React from 'react';
import ContentFullWidth from "../Content/ContentFullWidth";
import FullContainer from "../FullContainer";
import shakti from "../../assets/photo.png"

export const Frame3 = () => {
    return (
        <FullContainer
        containerid="3">
            <ContentFullWidth
                contentid="8"
                photo={shakti}
            />
        </FullContainer>
    );
};