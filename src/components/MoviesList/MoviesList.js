import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {GridList} from 'material-ui/GridList';
import Pagination from 'material-ui-pagination';
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
                <GridList
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
                </GridList>
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
    page: PropTypes.number
}

export default MoviesList;