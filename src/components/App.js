import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';
import AddMovie from './AddMovie';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: initialMovies
    };

    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
    this.addMovieToGallery = this.addMovieToGallery.bind(this);
    this.removeMovieFromGallery = this.removeMovieFromGallery.bind(this);
  }

  loadAdditionalMovies() {
    const currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );

    this.setState({movies: newMovies});
  }

  addMovieToGallery( movie ) {
    const ts = Date.now();
    const newMovie = {};
    newMovie['movie'+ts] = movie;
    const currentMovies = {...this.state.movies };
    const newMovies = Object.assign( currentMovies, newMovie);
    this.setState({movies: newMovies});
  }

  removeMovieFromGallery( movie ) {
    const currentMovies = {...this.state.movies};
    delete currentMovies[movie];
    this.setState({movies: currentMovies});

  }

  render() {
    return (
      <div className="App">
        <Header text="Jacopo's Movie Mojo App!" />
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
        <div className="movies">
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={this.state.movies[key]} movie={key} remove={this.removeMovieFromGallery}/>
            )
          }
        </div>
        <div className="add-movies">
          <button onClick={this.loadAdditionalMovies}>Load more...</button>
        </div>
        <AddMovie addMovie={this.addMovieToGallery} />
      </div>
    );
  }
}

export default App;
