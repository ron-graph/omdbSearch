import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchData } from 'src/actions/movieDetails';
import MovieInfo from 'src/components/MovieInfo/MovieInfo';
import SeriesInfo from 'src/components/MovieInfo/SeriesInfo';

class MovieDetails extends Component {
    componentWillMount() {
        const { id } = this.props.match.params;
        this.setState({id});
        this.props.fetchData(id);
    }

    render() {
        if(this.props.isLoading) {
            return (
                <div className="Loading"><CircularProgress size={80} /></div>
            );
        }
        switch(this.props.type) {
            default:
            case 'movie':
                return (<MovieInfo
                    title={this.props.title}
                    poster={this.props.poster}
                    year={this.props.year}
                    plot={this.props.plot}
                    actors={this.props.actors}
                    genre={this.props.genre}
                />);
            case 'series':
                return (<SeriesInfo
                    title={this.props.title}
                    poster={this.props.poster}
                    year={this.props.year}
                    plot={this.props.plot}
                    actors={this.props.actors}
                    genre={this.props.genre}
                    seasons={this.props.seasons}
                />);
        }
    }
}


const mapStateToProps = state => {
    return {
        isLoading: state.movie.isLoading,
        type: state.movie.type,
        title: state.movie.title,
        poster: state.movie.poster,
        year: state.movie.year,
        plot: state.movie.plot,
        actors: state.movie.actors,
        genre: state.movie.genre,
        seasons: state.movie.seasons,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: data => {
            dispatch(fetchData(data))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails);
