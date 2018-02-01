import React, { Component } from 'react';

class RemoveMovie extends Component {

  removeMovie(e) {
    e.preventDefault();
    var movie = this.props.movie
    this.props.remove(movie)
  }

  render() {
    return(
      <button type="submit" onClick={(e) => this.removeMovie(e)}>Remove</button>
    )
  }
}

export default RemoveMovie;