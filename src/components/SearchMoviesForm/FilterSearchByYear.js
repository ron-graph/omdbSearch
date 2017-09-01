import React from 'react';
import ManagedInput from 'src/common/ManagedInput';
import TextField from 'material-ui/TextField';

class SearchMoviesByTitle extends ManagedInput {
    validation = ['numeric'];
    render() {
        return (
            <div>
                <TextField
                    name="year"
                    floatingLabelText="Year"
                    onChange={this.onChange}
                    errorText={this.state.errors}
                />
            </div>
        );
    }
}

export default SearchMoviesByTitle;
