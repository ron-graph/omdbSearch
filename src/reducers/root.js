import { combineReducers } from 'redux';
import search from './search';
import movie from './movie';



export default combineReducers({
    search,
    movie
})