import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      // <nav className="navbar navbar-dark bg-dark nav-tabs">
      //   <a className="navbar-brand" href="#">Best App Ever</a>
      //   <a className="navbar-brand" href="#" onClick={this.props.toggleView} >Logout</a>
      // </nav>

      <ul class="nav nav-tabs nav-fill">
        <li class="nav-item">
          <a class="nav-link active" href="#">Best App Ever</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={this.props.toggleView}>Logout</a>
        </li>
      </ul>
    )
  }
}

export default Navbar;
