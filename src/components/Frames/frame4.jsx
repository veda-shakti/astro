import React from 'react';
import Container from "../Container";
import ContentFeedBack from "../Content/ContentFeedBack";
import Contentinline from "../Content/Contentinline";
import ContentBlockVebinar from "../Content/ContentBlockVebinar";
import ContentLastBlock from "../Content/ContentLastBlock";

export const Frame4 = () => {
    return (
        <Container
            containerid="4">

            <Contentinline
                contentid="9"
                />

            <ContentBlockVebinar
                contentid="10"
                title="Программа вебинара"
                description={<span>
                    Астропрогноз состоит из 2-х частей:<br/>
                    Первая часть — Вебинар 2 декабря<br/>
                    Вторая часть — 12 видеозаписей-астропрогнозов для 12 знаков зодиака<br/>
                    <br/>
                    Для понимания прогноза вам не понадобятся глубокие познания в астрологии, только знание своего восходящего знака (асцендента) по ведическому гороскопу, который в 99% отличается от привычного западного.
                    <br/>
                    <br/>
                    На вебинаре разберем общие астро тенденции для всех и как запустить удачу в новогоднюю ночь. Будут астрологические рекомендации и Васту ритуал для запуска процветания
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