import React, { Component } from 'react';

class AddMovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      year: '',
      description: '',
      poster: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const movie = {
      title: this.state.title,
      year: this.state.year,
      description: this.state.description,
      poster: this.state.poster
        ? this.state.poster
        : './posters/coming-soon.png'
    };

    this.props.addMovie(movie);
  }

  render() {
    return (
      <form className="movie-form" onSubmit={e => this.handleSubmit(e)}>
        <p>Add a Movie</p>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          type="text"
          placeholder="Title"
        />
        <input
          name="year"
          value={this.state.year}
          onChange={this.handleChange}
          type="text"
          placeholder="Year"
        />
        <input
          name="poster"
          value={this.state.poster}
          onChange={this.handleChange}
          type="text"
          placeholder="Poster"
        />
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="Description"
        />
        <button type="submit">Add Movie</button>
      </form>
    );
  }
}

export default AddMovieForm;
