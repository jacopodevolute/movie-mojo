import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Jacopo's Movie Mojo App!" />
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
        <div className="movies">
          <Movie title="Il Buono, il Brutto e il Cattivo" poster="./posters/il-buono-il-brutto-il-cattivo.jpg" year="1966" description="Spaghetti Western" />
          <Movie title="Jaws" poster="./posters/jaws.jpg" year="1975" description="Mystery/Thriller" />
          <Movie title="Back To The Future" poster="./posters/back-to-the-future.jpg" year="1985" description="Science Fiction" />
          <Movie title="Full Metal Jacket" poster="./posters/full-metal-jacket.jpg" year="1987" description="War Drama" />

        </div>

        <Movie />
      </div>
    );
  }
}

export default App;
