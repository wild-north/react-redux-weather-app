import * as constants from './constants';
import { createAction } from './helpers';
import { getApiUrl } from './config';
import store from './store';

export const getWeather = (payload) => (dispatch) => {
    dispatch({
        type: constants.WEATHER_REQUEST,
        payload
    });

    const cityName = store.getState().get('cityName');

    fetch(getApiUrl(cityName), {
      method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: constants.WEATHER_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: constants.WEATHER_FAILURE,
                payload: err
            })
        })
};

export const changeCityName = createAction(constants.CITY_NAME_CHANGE);