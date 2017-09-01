import { Component } from 'react';
import PropTypes from 'prop-types'
import { ERRORS } from 'src/constants/errors';


class ManagedInput extends Component {
    state = {
        value: '',
        errors: ''
    }
    validate = (value) => {
        let hasErrors = false;
        if(value === undefined) {
            value = this.state.value;
        }
        if(this.validation) {
            this.validation = Array.isArray(this.validation) ? this.validation : [this.validation];
            const errorTypes = this.validation.filter(type => {
                switch(type) {
                    case 'numeric':
                        if(value && isNaN(value)) return true;
                        break;
                    case 'required':
                        if(!value) return true;
                        break;
                    default:
                        return false;
                }
                return false;
            });
            let errors;
            if(errorTypes.length === 0) {
                errors = '';
            }
            else {
                hasErrors = true;
                errors = errorTypes.map(err => {
                    return ERRORS.VALIDATION[err.toUpperCase()];
                });
            }
            this.setState({errors});
        }
        return hasErrors;
    }
    onChange = (e, index, val) => {
        let value = val || index;
        let field = e.target.name;
        if(!field) {
            field = this.refs.input && this.refs.input.props
                ? this.refs.input.props.name : null;
        }

        this.validate(value);
        this.setState({value});
        try {
            this.props.onChange(field, value);
        }
        catch(e) {
            console.error('onChange was not passed to', field, e.target);
        }
    }
}


ManagedInput.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default ManagedInput;
