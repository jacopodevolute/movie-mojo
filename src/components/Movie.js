import React, { Component } from 'react';
import RemoveMovie from './RemoveMovie';


class Movie extends Component {
  render() {
    return(
      <div className="movie">
        <h2>{this.props.meta.title}</h2>
        <div>
          <img width="200" src={this.props.meta.poster} alt={this.props.meta.title}/>
        </div>
        <p>({this.props.meta.year})</p>
        <p>{this.props.meta.description}</p>
        <RemoveMovie movie={this.props.movie} remove={this.props.remove}/>
      </div>
    )
  };
}

export default Movie;