import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {GridTile} from 'material-ui/GridList';

class MovieThumb extends Component {
    render() {
        const year = 'Year: ' + this.props.year;
        return (
            <Link to={'movie/'+this.props.id}><GridTile
                key={this.props.id}
                title={this.props.title}
                subtitle={year}
            >
                <img src={this.props.poster || 'defaultImage.jpg'} alt={this.props.title}/>
            </GridTile></Link>
        )
    }
}

MovieThumb.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.string.isRequired
}
export default MovieThumb;
