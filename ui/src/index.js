import React from 'react';
import Noty from 'noty';
import ReactDOM from 'react-dom/client';
import App from './App';
import EventManager from "./EventManager";

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

EventManager.addHandler('notify', value => {
    notify(value.type, value.layout, value.text, value.time)
});

Noty.setMaxVisible(4);

function notify(type, layout, message, time, theme) {
    let types = ['information', 'error', 'success', 'warn'];
    let layouts = ['top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight'];
    let notifyText = 'Информация!';
    switch (theme) {
        case 'error':
            notifyText = 'Ошибка!';
            break;
        case 'warning':
            notifyText = 'Предупреждение!';
            break;
        case 'info':
            notifyText = 'Информация!';
            break;
        case 'success':
            notifyText = 'Успешно!';
            break;
        default:
            break;
    }
    switch (type) {
        case 1:
            notifyText = 'Ошибка!';
            break;
        case 3:
            notifyText = 'Предупреждение!';
            break;
        case 0:
            notifyText = 'Информация!';
            break;
        case 2:
            notifyText = 'Успешно!';
            break;
        default:
            break;
    }
    message = `
    <div class="message__notify__container message__notify__color__${type}">
        <span class="message__notify__type">${notifyText}</span>
        <span class="message__notify">${message}</span>
    </div>`;
    let ntf = new Noty({
        type: types[type],
        layout: layouts[layout],
        theme: theme || 'dednet',
        text: message,
        timeout: time,
        progressBar: false,
        animation: {
            open: 'animated fadeInLeft',
            close: 'animated fadeOutLeft'
        }
    });
    ntf.show();
}

// notify(0, 1, 'Видимо произошла какая-то непредвиденная ошибка ', 1000000000);
// notify(1, 1, 'Видимо произошла какая-то непредвиденная ошибка', 1000000000);
// notify(2, 1, 'Видимо произошла какая-то непредвиденная ошибка', 1000000000);
// notify(3, 1, 'Видимо произошла какая-то непредвиденная ошибка', 1000000000);