import React from 'react';
import ManagedInput from 'src/common/ManagedInput'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class FilterSearchByType extends ManagedInput {
    state = {
        value: 'all'
    }
    render() {
        return (
            <div>
                <SelectField
                    name="type"
                    floatingLabelText="Choose Type"
                    value={this.state.value}
                    onChange={this.onChange}
                    ref="input"
                >
                    <MenuItem value="all" primaryText="All"/>
                    <MenuItem value="movies" primaryText="Movies"/>
                    <MenuItem value="series" primaryText="Series"/>
                    <MenuItem value="episode" primaryText="Episode"/>
                </SelectField>
            </div>
        )
    }
}

export default FilterSearchByType;
