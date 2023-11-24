/* global ym */

import { Component } from 'react';

export class YandexMetrica extends Component {
    componentDidMount() {
        // Проверка, был ли скрипт уже добавлен
        if (!document.querySelector(`script[src="https://mc.yandex.ru/metrika/tag.js"]`)) {
            // Создание скрипта
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://mc.yandex.ru/metrika/tag.js";

            // Добавление скрипта в DOM
            document.head.appendChild(script);

            // Инициализация Метрики после загрузки скрипта
            script.onload = () => {
                window.ym = window.ym || function() {
                    (window.ym.a = window.ym.a || []).push(arguments);
                };
                window.ym.l = 1 * new Date();

                ym(95661099, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                });
            };
        }
    }

    render() {
        // Отображение контента или ничего, если не требуется визуальное представление
        return null;
    }
}
