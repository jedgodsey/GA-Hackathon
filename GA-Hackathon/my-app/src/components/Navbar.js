import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Best App Ever</a>
        <a className="navbar-brand" href="#" onClick={this.props.toggleView} >Logout</a>
      </nav>
    )
  }
}

export default Navbar;
