import {combineReducers} from 'redux';
import {albumReducers} from './albumReducers';

export default combineReducers({
    albums:albumReducers
})