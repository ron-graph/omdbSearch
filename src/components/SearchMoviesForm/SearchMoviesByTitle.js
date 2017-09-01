import React from 'react';
import ManagedInput from 'src/common/ManagedInput';
import TextField from 'material-ui/TextField';

class SearchMoviesByTitle extends ManagedInput {
    validation = ['required'];
    render() {
        return (
            <div className="full-width">
                <TextField
                    name="title"
                    floatingLabelText="Title"
                    fullWidth={true}
                    onChange={this.onChange}
                    errorText={this.state.errors}
                />
            </div>
        );
    }
}

export default SearchMoviesByTitle;
