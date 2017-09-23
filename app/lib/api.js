import config from '../config';

const net = require('react-native-tcp');

class Api {
    static requestQueue = [];

    static send(params) {
        console.log('http://' + config.apiHost + ':' + config.apiPort, params);
        return new Promise((resolve, reject) => {
            fetch('http://' + config.apiHost + ':' + config.apiPort, params)
                .then((response) => {
                    if (response.ok && response.status === 200) {
                        return response.json();
                    }

                    reject(response);
                })
                .then((json) => {
                    resolve(json);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static sendRequest(params, callback) {
        let makeRequest = (request) => {
            let success = false;
            Api.send(request.params)
                .then((response) => {
                    this.requestQueue.splice(this.requestQueue.indexOf(request), 1);
                    request.callback(response);
                    
                    success = true;
                }, function (error) {
                    success = false;
                });

            setTimeout(() => {
                if (! success) {
                    this.requestQueue.splice(this.requestQueue.indexOf(request), 1);
                }
            }, config.apiTimeout);
        };

        let request = {
            params: {
                method: 'POST',
                body: JSON.stringify(params)
            },
            callback: (response) => {
                callback(response);

                if (this.requestQueue.length > 0) {
                    let request = this.requestQueue[0];
                    makeRequest(request);
                }
            }
        };

        this.requestQueue.push(request);
        if (this.requestQueue.length === 1) {
            makeRequest(request);
        }
    }
}

export default Api