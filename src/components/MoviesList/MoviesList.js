import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {GridList} from 'material-ui/GridList';
import Pagination from 'material-ui-pagination';
import CircularProgress from 'material-ui/CircularProgress';
import MovieThumb from './MovieThumb';
import './MoviesList.scss';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        height: 450,
        overflowY: 'auto',
    },
};
class MoviesList extends Component {
    state = {
        page: 0
    }

    render() {
        return (
            <div className="MoviesList" style={styles.root}>
                {
                    (this.props.isLoading && (
                        <div className="Loading" style={{height: 450}}><CircularProgress size={80} /></div>
                    )) ||
                    (<GridList
                        cellHeight={180}
                        cols={5}
                        style={styles.gridList}
                    >
                        {
                            this.props.list.map(movie => (
                                <MovieThumb
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    poster={movie.poster}
                                    year={movie.year}
                                />
                            ))
                        }
                    </GridList>)
                }
                <Pagination
                    total={ this.props.total }
                    current={ this.props.page }
                    display={ 5 }
                    onChange={ this.props.changePage }
                />
            </div>
        );
    }
}

MoviesList.propTypes = {
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
    page: PropTypes.number,
    isLoading: PropTypes.bool
}

export default MoviesList;