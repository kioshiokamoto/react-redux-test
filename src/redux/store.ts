import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import {testReducer } from './reducers/testReducers'

const reducer = combineReducers({
	testReducer
});


const middleware = [thunk];




const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store