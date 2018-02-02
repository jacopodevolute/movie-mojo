import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: './posters/coming-soon.png'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ file: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const movie =  {
      title: this.title.value,
      year: this.year.value,
      description: this.description.value,
      poster: this.state.file
    };

    this.props.addMovie(movie);
  }

  render() {
    return (
      <form className="movie-form" onSubmit={(e) => this.handleSubmit(e)}>
        <p>Add a Movie</p>
        <input ref={ ( input ) => this.title = input } type="text" placeholder="Title" />
        <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" />
        <input value={this.state.file} onChange={this.handleChange} type="text" placeholder="Poster" />
        <textarea ref={ ( input ) => this.description = input } placeholder="Description">
        </textarea>
        <button type="submit">Add Movie</button>
      </form>
    );
  }
}

export default AddMovie;