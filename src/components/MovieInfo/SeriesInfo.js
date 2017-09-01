import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Info.scss';

class SeriesInfo extends Component {
    render() {
        const posterStyle = {
            backgroundImage: 'url(' + this.props.poster + ')'
        }
        return (
            <div className="SeriesInfo InfoHolder">
                <div className="Header">
                    <div className="Poster" style={posterStyle}></div>
                    <div className="Details">
                        <div>
                            <h2>{this.props.title}</h2>
                            <div className="Sub">
                                <h5>Year: {this.props.year}</h5>
                                <h5>Seasons: {this.props.seasons}</h5>
                                <h5>Genre: {this.props.genre}</h5>
                            </div>
                            <p>{this.props.plot}</p>
                        </div>
                        <div className="Actors">
                            <h6>Actors</h6>
                            {this.props.actors.map((actor, i) => (<div key={i}>{actor}</div>))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SeriesInfo.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    plot: PropTypes.string,
    actors: PropTypes.array,
    genre: PropTypes.string,
    seasons: PropTypes.string,
}

export default SeriesInfo;