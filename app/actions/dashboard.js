import * as types from './types';
import config from '../config';

const net = require('react-native-tcp');

export function initSocket() {
    return (dispatch, getState) => {
        let client = net.createConnection({
            host: config.apiIpAddr,
            port: config.apiPort,
            timeout: config.apiTimeout,
            dataReceiverMode: true
        });

        let retrying = false;
        let errorHandler = (error) => {
            if (retrying) {
                return;
            }

            retrying = true;
            setTimeout(() => {
                console.log('Retrying connection with server...');

                dispatch(initSocket());
            }, 1000);
        };

        client.on('connect', function () {
            client.retrieveLastData();
        });

        client.on('close', errorHandler);
        client.on('error', errorHandler);
        client.on('data', (payload) => {
            console.log('received lastdata');
            let message = String.fromCharCode.apply(null, payload);

            try {
                message = JSON.parse(message);
                dispatch(receiveData(message));
            } catch (e) {
                console.log('Discarding message: ', message, e);
            }

            client.retrieveLastData();
        });
    };
}



export function receiveData(data) {
    return {
        type: types.RECEIVE_DATA,
        data
    };
}

export function selectDashboardTab(tab) {
    return {
        type: types.DASHBOARD_SELECT_TAB,
        tab: tab
    };
}