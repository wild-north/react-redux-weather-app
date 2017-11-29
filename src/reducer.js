import Immutable from 'immutable';
import * as constants from './constants';

const initialState = Immutable.fromJS({
    cityName: 'Kharkiv',
    isLoading: false,
    isError: false,
    weather: {
        main: {
            temp: null
        }
    }
});

export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case constants.CITY_NAME_CHANGE:
            return state.set('cityName', action.payload);
        case constants.WEATHER_REQUEST:
            return state.set('isLoading', true);

        case constants.WEATHER_FAILURE:
            return state
                .set('isLoading', false)
                .set('isError', true);

        case constants.WEATHER_SUCCESS:
            return state
                .set('weather', Immutable.fromJS(action.payload))
                .set('isLoading', false)
                .set('isError', false);
    }

    return state;
};