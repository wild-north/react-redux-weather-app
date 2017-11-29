import { createSelector } from 'reselect';
import { createImmutableSelector } from './helpers';

export const weather = state => state.get('weather');

export const main = createImmutableSelector(
    weather,
    weather => weather.get('main')
);

export const temp = createImmutableSelector(
    main,
    main => main.get('temp')
);