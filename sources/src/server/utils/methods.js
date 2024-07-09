import colors from 'colors';

class Methods {
    constructor() {
        colors.setTheme({
            done: 'green',
            info: 'yellow',
            error: 'red'
        });
    }
    done(...args) {
        console.log(colors.done('[DONE]'), ...args);
    }
    info(...args) {
        console.log(colors.info('[INFO]'), ...args);
    }
    error(...args) {
        console.log(colors.error('[ERROR]'), ...args);
    }
}

const methods = new Methods();
export default methods;