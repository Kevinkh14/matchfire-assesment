import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import cardsReducer from './reducers/cardsReducer'

const rootReducer = combineReducers({
    cardsReducer
});

export default createStore(rootReducer, applyMiddleware(promise))