import React, {useEffect} from 'react';
import Container from "../Container";
import ContentFeedBack from "../Content/ContentFeedBack";
import Contentinline from "../Content/Contentinline";
import ContentBlockVebinar from "../Content/ContentBlockVebinar";
import ContentLastBlock from "../Content/ContentLastBlock";

export const Frame4 = (props) => {
    useEffect(() => {
        }, [props.animating, props.currentframe]
    )
    return (
        <Container
            containerid="4">

            <Contentinline
                contentid="9"
                animating = {props.animating}
                currentframe = {props.currentframe}
                />

            <ContentBlockVebinar
                contentid="10"
                title="Программа вебинара"
                description={<span>
                    Астропрогноз состоит из 2-х частей:<br/>
                    Вебинар 2 декабря и 12 видеозаписей-астропрогнозов для 12 знаков зодиака<br/>
                    <br/>
                    На вебинаре будет :
Прогноз без “воды”, общих фраз, на простом, понятном языке, для которого не нужны знания астрологии, только знание своего восходящего знака (асцендента), который отличается в 99% от привычного западного
                </span>
            }
            />

            <ContentFeedBack
                contentid="11"
            />

            <ContentLastBlock
                contentid="12"
            />

        </Container>
    );
};