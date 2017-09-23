import * as types from './types';
import config from '../config';

import Api from '../lib/api';

import { log } from './advanced';

export function requestVentilatorPositionChange(position) {
    return (dispatch, state) => {
        Api.sendRequest({
            module: 'comfort',
            action: 'set-ventilator-position',
            data: parseInt(position)
        }, function (response) {
            // dispatch(refreshGeneralValues(response));

            dispatch(log('comfort', 'Response for "set-ventilator-position": ' + response));
        });

        dispatch({
            type: types.GENERAL_REFRESH_VENTILATOR_POSITION,
            ventilatorPosition: parseInt(position)
        });

        dispatch(log('comfort', 'Sent request "set-ventilator-position" with data: ' + parseInt(position)));
    };
}

export function requestVentilatorSpeedChange(speed) {
    return (dispatch, state) => {
        Api.sendRequest({
            module: 'comfort',
            action: 'set-ventilator-speed',
            data: parseInt(speed)
        }, function (response) {
            // dispatch(refreshGeneralValues(response));

            dispatch(log('comfort', 'Response for "set-ventilator-speed": ' + response));
        });

        /*dispatch({
            type: types.GENERAL_REFRESH_VENTILATOR_SPEED,
            ventilatorSpeed: parseInt(speed)
        });*/

        dispatch(log('comfort', 'Sent request "set-ventilator-speed" with data: ' + parseInt(speed)));
    };
}

export function requestAirConditioningChange(on) {
    return (dispatch, state) => {
        Api.sendRequest({
            module: 'comfort',
            action: 'set-air-conditioning',
            data: (on ? 1 : 0)
        }, function (response) {
            // dispatch(refreshGeneralValues(response));

            dispatch(log('comfort', 'Response for "set-air-conditioning": ' + response));
        });

        /*dispatch({
            type: types.GENERAL_REFRESH_AIR_CONDITIONING,
            airConditioning: !! on
        });*/

        dispatch(log('comfort', 'Sent request "set-air-conditioning" with data: ' + (on ? 1 : 0)));
    };
}

export function requestAirRecirculationChange(on) {
    return (dispatch, state) => {
        Api.sendRequest({
            module: 'comfort',
            action: 'set-air-recirculation',
            data: (on ? 1 : 0)
        }, function (response) {
            // dispatch(refreshGeneralValues(response));

            dispatch(log('comfort', 'Response for "set-air-recirculation": ' + response));
        });

        /*dispatch({
            type: types.GENERAL_REFRESH_AIR_RECIRCULATION,
            airRecirculation: !! on
        });*/

        dispatch(log('comfort', 'Sent request "set-air-recirculation" with data: ' + (on ? 1 : 0)));
    };
}

export function requestHazardLightsChange(on) {
    return (dispatch, state) => {
        Api.sendRequest({
            module: 'comfort',
            action: 'set-hazard-lights',
            data: (on ? 1 : 0)
        }, function (response) {
            // dispatch(refreshGeneralValues(response));

            dispatch(log('comfort', 'Response for "set-hazard-lights": ' + response));
        });

        /*dispatch({
            type: types.GENERAL_REFRESH_HAZARD_LIGHTS,
            hazardLights: !! on
        });*/

        dispatch(log('comfort', 'Sent request "set-hazard-lights" with data: ' + (on ? 1 : 0)));
    };
}

export function toggleDoorLocks() {
    return (dispatch, state) => {
        Api.sendRequest({
            module: 'comfort',
            action: 'toggle-door-locks'
        }, function (response) {
            // dispatch(refreshGeneralValues(response));

            dispatch(log('comfort', 'Response for "toggle-door-locks": ' + response));
        });

        /*dispatch({
            type: types.GENERAL_REFRESH_DOOR_LOCKS,
            doorLocks: !! on
        });*/

        dispatch(log('comfort', 'Sent request "toggle-door-locks"'));
    };
}

export function toggleDefrost() {
    return (dispatch, state) => {
        Api.sendRequest({
            module: 'comfort',
            action: 'toggle-defrost',
        }, function (response) {
            // dispatch(refreshGeneralValues(response));

            dispatch(log('comfort', 'Response for "toggle-defrost": ' + response));
        });

        /*dispatch({
            type: types.GENERAL_REFRESH_DEFROST,
            defrost: !! on
        });*/

        dispatch(log('comfort', 'Sent request "toggle-defrost"'));
    };
}

export function openTrunk() {
    return (dispatch, state) => {
        Api.sendRequest({
            module: 'comfort',
            action: 'open-trunk'
        }, function (response) {
            // dispatch(refreshGeneralValues(response));

            dispatch(log('comfort', 'Response for "open-trunk": ' + response));
        });

        dispatch(log('comfort', 'Sent request "open-trunk"'));
    };
}

export function refreshGeneralValues(values) {
    dispatch(log('comfort', 'Refreshing "general" tab values: ' + values));

    return {
        type: types.GENERAL_REFRESH_VALUES,
        ventilatorPosition: parseInt(values['ventilator-position']),
        ventilatorSpeed: parseInt(values['ventilator-speed']),
        airConditioning: !! values['air-conditioning'],
        airRecirculation: !! values['air-recirculation'],
        hazardLights: !! values['hazard-lights'],
        doorLocks: !! values['door-locks'],
        defrost: !! values['defrost'] 
    };
}