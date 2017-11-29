import { createConnectorForSelector, createImmutableSelector } from '../../helpers';
import { temp } from '../../selectors';

const resultsSelector = createImmutableSelector(
    temp,
    temp => ({temperature: temp})
);

export const resultsConnector = createConnectorForSelector(resultsSelector);