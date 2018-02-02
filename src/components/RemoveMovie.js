import React, { Component } from 'react';

class RemoveMovie extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const movie = this.props.movie
    this.props.remove(movie)
  }

  render() {
    return(
      <button type="submit" onClick={this.handleClick}>Remove</button>
    )
  }
}

export default RemoveMovie;