import { SEARCH_MOVIES, SEARCH_MOVIES_RESULTS, SEARCH_MOVIES_ERROR } from 'src/constants/actions';
import CacheControl from 'src/common/CacheControl';
import { search } from 'src/providers/omdb';

function updateSearchStatus(params) {
    return { type: SEARCH_MOVIES, params };
}
function endSearch(response) {
    return { type: SEARCH_MOVIES_RESULTS, response };
}
function endSearchWithError(error) {
    return { type: SEARCH_MOVIES_ERROR, error };
}


let cache = new CacheControl();

export function doSearch(params) {
    return (dispatch) => {
        dispatch(updateSearchStatus(params));
        cache.fetch(search, params).then(res => {
            dispatch(endSearch(res));
        }, err => {
            dispatch(endSearchWithError(err));
        })
    }
}