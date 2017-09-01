import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header/Header';
import './App.css';

import SearchMoviesPage from './pages/SearchMovies';
import MovieDetailsPage from './pages/MovieDetails';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <div className="App">
                        <Header />
                        <Route exact path="/" component={SearchMoviesPage}/>
                        <Route path="/movie/:id" component={MovieDetailsPage}/>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
