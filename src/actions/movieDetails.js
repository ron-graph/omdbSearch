import { FETCH_MOVIE_DATA, FETCH_MOVIE_DATA_RESULT, FETCH_MOVIE_DATA_ERROR } from 'src/constants/actions';
import CacheControl from 'src/common/CacheControl';
import { searchDetails } from 'src/providers/omdb';

function fetchingMovieData() {
    return { type: FETCH_MOVIE_DATA };
}
function fetchedMovieData(params) {
    return { type: FETCH_MOVIE_DATA_RESULT, params };
}
function fetchedMovieDataError(params) {
    return { type: FETCH_MOVIE_DATA_ERROR, params };
}
let cache = new CacheControl();

export function fetchData(params) {
    return (dispatch) => {
        dispatch(fetchingMovieData(params));
        cache.fetch(searchDetails, params).then(res => {
            dispatch(fetchedMovieData(res));
        }, err => {
            dispatch(fetchedMovieDataError(err));
        })
    }
}