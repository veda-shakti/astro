import React, { Component } from 'react';
import { YMInitializer } from 'react-yandex-metrika';

export class YandexMetrica extends Component {
    componentDidMount() {
        // Инициализация Метрики
        Object.defineProperty(window, 'ym', {
            value: window.ym || function() {
                (window.ym.a = window.ym.a || []).push(arguments);
            },
            writable: true,
            configurable: true
        });

        window.ym.l = 1 * new Date();

        window.ym(95661099, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        });
    }

    render() {
        // Отображение контента или ничего, если не требуется визуальное представление
        return (
            <YMInitializer
                accounts={[95661099]}ы
                options={{
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                }}
            />
        );
    }
}
