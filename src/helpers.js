import Immutable from 'immutable';
import { defaultMemoize, createSelectorCreator } from 'reselect';
import { connect } from 'react-redux';

export const createAction = type => payload => ({
    type,
    payload
});

export const createImmutableSelector = createSelectorCreator(defaultMemoize, Immutable.is);
export const mapSelectorToConnector = selector => state => selector(state);
export const createConnectorForSelector = (selector = null, actions = null) => connect(
    selector ? mapSelectorToConnector(selector) : selector,
    actions
);

// import Immutable from 'immutable';
// import { createSelectorCreator, defaultMemoize } from 'reselect';
// import {isString} from 'lodash';
// const EmptyMap = Immutable.Map({});
// const EmptyList = Immutable.List([]);
//
// // I guess we need to create a Immutable specific selector here
// export const createImmutableSelector = createSelectorCreator(defaultMemoize, Immutable.is);
// export const createSimpleImmutableSelector = (selector, name) =>
//     createImmutableSelector(selector, selector => selector.get(name));
// //export const createImmutableSelector = createSelector;
// export const valueOrMap = value => value ? value : EmptyMap;
// export const valueOrList = value => value ? value : EmptyList;
// export const valueOrNull = value => value ? value : null;
// export const valueOrFalse = value => value ? value : false;
// export const valueOrString = value => isString(value) ? value : '';
