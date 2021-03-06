import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import SearchMoviesForm from 'src/components/SearchMoviesForm/SearchMoviesForm';
import MoviesList from 'src/components/MoviesList/MoviesList';
import { doSearch } from 'src/actions/searchMovies';
import { connect } from 'react-redux';

class SearchMovies extends Component {
    render() {
        return (
            <div className="SearchField">
                <SearchMoviesForm onSubmit={this.props.onSubmit}/>
                {
                    (this.props.isSearching &&
                    !this.props.params.page &&
                    (<div className="Loading"><CircularProgress size={80} /></div>)) ||
                    (this.props.error &&
                    (<div>{this.props.error}</div>)) ||
                    (this.props.results &&
                    <MoviesList
                        list={this.props.results}
                        total={this.props.pages}
                        page={this.props.params.page}
                        isLoading={this.props.isSearching}
                        changePage={this.props.onChangePage}
                    />)
                }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        isSearching: state.search.isSearching,
        params: state.search.searchingParams,
        results: state.search.results,
        pages: state.search.pages,
        error: state.search.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: data => {
            dispatch(doSearch(data))
        }
    }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { params } = stateProps;

    return Object.assign({}, ownProps, stateProps, dispatchProps, {
        onChangePage: page => {
            dispatchProps.onSubmit(Object.assign({}, params, { page }))
        }
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SearchMovies);
