import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const general = createReducer({
		ventilatorPosition: 1,
		ventilatorSpeed: 0,
		airConditioning: false,
		airRecirculation: false,
		hazardLights: false,
		doorLocks: false,
		defrost: false
	}, {
		[types.GENERAL_REFRESH_VENTILATOR_POSITION](state, action) {
			let newState = Object.assign({}, state);
			newState.ventilatorPosition = action.ventilatorPosition;

			return newState;
		},

		[types.GENERAL_REFRESH_VENTILATOR_SPEED](state, action) {
			let newState = Object.assign({}, state);
			newState.ventilatorSpeed = action.ventilatorSpeed;

			return newState;
		},

		[types.GENERAL_REFRESH_AIR_CONDITIONING](state, action) {
			let newState = Object.assign({}, state);
			newState.airConditioning = action.airConditioning;

			return newState;
		},

		[types.GENERAL_REFRESH_AIR_RECIRCULATION](state, action) {
			let newState = Object.assign({}, state);
			newState.airRecirculation = action.airRecirculation;

			return newState;
		},

		[types.GENERAL_REFRESH_HAZARD_LIGHTS](state, action) {
			let newState = Object.assign({}, state);
			newState.hazardLights = action.hazardLights;

			return newState;
		},

		[types.GENERAL_REFRESH_DOOR_LOCKS](state, action) {
			let newState = Object.assign({}, state);
			newState.doorLocks = action.doorLocks;

			return newState;
		},

		[types.GENERAL_REFRESH_DEFROST](state, action) {
			let newState = Object.assign({}, state);
			newState.defrost = action.defrost;

			return newState;
		},

		[types.GENERAL_REFRESH_VALUES](state, action) {
			let newState = Object.assign({}, state);
			newState.ventilatorPosition = action.ventilatorPosition;
			newState.ventilatorSpeed = action.ventilatorSpeed;
			newState.airConditioning = action.airConditioning;
			newState.airRecirculation = action.airRecirculation;
			newState.hazardLights = action.hazardLights;
			newState.doorLocks = action.doorLocks;
			newState.defrost = action.defrost;

			return newState;
		}
});