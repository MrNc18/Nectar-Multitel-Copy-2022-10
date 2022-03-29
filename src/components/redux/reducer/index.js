import {combineReducers} from 'redux'
import CounterReducer from './counterReducer.js';

const rootReducer = combineReducers({
    count:CounterReducer
});

export default rootReducer