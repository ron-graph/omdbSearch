import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Route path="/:page" component={BackToHome}/>
                <h2>The Majestic Movies Searcher</h2>
            </div>
        );
    }
}

const BackToHome = ({ match }) => {
    if (match.params.page !== '/') {
        return (
            <Link to="/"><IconButton
                tooltip="Take Me Home"
                iconStyle={{color: '#fff'}}
            >
                <ActionHome />
            </IconButton></Link>
        );
    }
    return '';
}

export default Header;
