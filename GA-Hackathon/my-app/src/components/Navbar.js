import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> eb50361ddc19fb55b4d7245b33156035c04a8069
    )
  }
}

export default Navbar;
