/* global fbq */

import React, { Component } from 'react';

export class FacebookPixel extends Component {
    componentDidMount() {
        // Проверка, был ли скрипт уже добавлен
        if (!document.querySelector(`script[src="https://connect.facebook.net/en_US/fbevents.js"]`)) {
            // Создание скрипта
            const script = document.createElement("script");
            script.async = true;
            script.src = "https://connect.facebook.net/en_US/fbevents.js";

            // Добавление скрипта в DOM
            document.head.appendChild(script);

            // Инициализация Facebook Pixel после загрузки скрипта
            script.onload = () => {
                if (!window.fbq) {
                    window.fbq = function() {
                        if (window.fbq.callMethod) {
                            window.fbq.callMethod.apply(window.fbq, arguments);
                        } else {
                            (window.fbq.queue = window.fbq.queue || []).push(arguments);
                        }
                    };
                    window.fbq.push = window.fbq;
                    window.fbq.loaded = true;
                    window.fbq.version = '2.0';
                    window.fbq.queue = [];
                }

                window.fbq('init', '868651238324672');
                window.fbq('track', 'PageView');
            };
        }
    }

    render() {
        return null;
    }
}
