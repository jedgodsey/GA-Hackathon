import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      // <nav className="navbar navbar-dark bg-dark nav nav-tabs">
        /* <a className="navbar-brand" href="#">Best App Ever</a>
        <a className="navbar-brand" href="#" onClick={this.props.toggleView} >Logout</a> */
        <ul className="nav nav-tabs ml-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      // </nav>
    )
  }
}

export default Navbar;
