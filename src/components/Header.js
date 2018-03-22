import React, { Component } from 'react';

class Header extends Component {
  render() {
    // return React.createElement( 'div', null, 'Hello there, this is a React component!' );
    return (
      <header className="App-header">
        <h1 className="App-title">{this.props.text}</h1>
      </header>
    );
  }
}

export default Header;
