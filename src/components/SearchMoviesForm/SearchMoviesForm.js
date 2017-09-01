import React, { Component } from 'react';
import SearchMoviesByTitle from './SearchMoviesByTitle';
import FilterSearchByType from './FilterSearchByType';
import FilterSearchByYear from './FilterSearchByYear';
import RaisedButton from 'material-ui/RaisedButton';
import './SearchMovies.scss';


class SearchMovies extends Component {
    onChange = (key, val) => {
        this.setState({
            [key]: val
        });
    }
    onClick = () => {
        let hasErrors = false;
        Object.keys(this.refs).forEach(key => {
            const isNotValidated = this.refs[key].validate();
            if(isNotValidated) {
                hasErrors = true;
            }
        })
        console.log(hasErrors, this.state);
        if(!hasErrors) {
            this.props.onSubmit(this.state);
        }
    }
    render() {
        return (
            <div className="SearchField">
                <form>
                    <div className="row">
                        <SearchMoviesByTitle ref="title" onChange={this.onChange} />
                    </div>
                    <div className="row">
                        <FilterSearchByType ref="type" onChange={this.onChange} />
                        <FilterSearchByYear ref="year" onChange={this.onChange} />
                    </div>
                    <RaisedButton
                        label="Search"
                        primary={true}
                        onClick={this.onClick}
                    />
                </form>
            </div>
        );
    }
}

export default SearchMovies;
