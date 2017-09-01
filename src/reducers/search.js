import { SEARCH_MOVIES, SEARCH_MOVIES_RESULTS, SEARCH_MOVIES_ERROR } from 'src/constants/actions'

const initialState = {
    searchingParams: {},
    isSearching: false,
    results: null
};

export default function search(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIES:
            let newState = Object.assign({}, state, {
                searchingParams: Object.assign({}, action.params),
                isSearching: true,
                error: false
            });
            if (!action.params.page) {
                newState.results = null;
                newState.pages = 0;
            }
            return newState;
        case SEARCH_MOVIES_RESULTS:
            return Object.assign({}, state, {
                isSearching: false,
                results: action.response.results,
                pages: action.response.pages
            });
        case SEARCH_MOVIES_ERROR:
            return Object.assign({}, state, {
                isSearching: false,
                error: action.error
            });
        default:
            return state
    }
}