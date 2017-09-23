import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

import config from '../config';

export const advanced = createReducer({
		busy: false,
		log: [],
		update: {
			'qt-vec-api': {
				lastCommit: null
			},

			'arduino-vec-data': {
				lastCommit: null
			},

			'arduino-vec-controller': {
				lastCommit: null
			}
		}
	}, {
		[types.ADVANCED_LOG](state, action) {
			let newState = Object.assign({}, state);
			newState.log.unshift(action.log);
			newState.log = newState.log.slice(0, config.maxLogEntries);

			return newState;
		},

		[types.ADVANCED_CHECK_UPDATE](state, action) {
			let newState = Object.assign({}, state);
			newState.busy = true;
			
			return newState;
		},

		[types.ADVANCED_CHECKED_UPDATE](state, action) {
			let newState = Object.assign({}, state);
			newState.busy = false;
			newState.update[action.component].lastCommit = action.lastCommit;
			
			return newState;
		}
});