import { FETCH_MOVIE_DATA, FETCH_MOVIE_DATA_RESULT, FETCH_MOVIE_DATA_ERROR } from 'src/constants/actions'

const initialState = {
    isLoading: false,
    title: '',
    poster: '',
    year: 0,
    plot: '',
    actors: [],
    genre: '',
    seasons: 0
};

export default function movie(state = initialState, action) {
    //let movie = Object.assign({}, state.movie);
    switch (action.type) {
        case FETCH_MOVIE_DATA:
            return Object.assign({}, state, {
                isLoading: true
            });
        case FETCH_MOVIE_DATA_RESULT:
            return Object.assign({}, state, {
                isLoading: false,
                ...action.params
            })
        case FETCH_MOVIE_DATA_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.params
            })
        default:
            return state;
    }
}