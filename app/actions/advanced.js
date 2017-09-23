import * as types from './types';
import config from '../config';

import Moment from 'moment';
import Api from '../lib/api';

export function log(context, message) {
    return {
        type: types.ADVANCED_LOG,
        log: {
        	date: Moment(),
            context: context,
            message: message
        } 
    };
}

export function checkUpdate(component) {
	return (dispatch, state) => {
        Api.sendRequest({
            module: 'update',
            action: 'check',
            data: component
        }, function (response) {
        	console.log('got response', response);
        	dispatch({
	        	type: types.ADVANCED_CHECKED_UPDATE,
	            component: component,
	            lastCommit: response.lastCommit
	        }); 
        });

        dispatch({
        	type: types.ADVANCED_CHECK_UPDATE,
            component: component
        });
    };
}