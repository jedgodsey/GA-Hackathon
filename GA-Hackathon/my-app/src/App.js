import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    view: false
  }
  toggleView = (event) => {
    event.preventDefault();
    this.setState({view: !this.state.view})
    console.log(!this.state)
  }
  render() {
    return (
      <div className="App">
        <Navbar toggleView={this.toggleView} />
        <h1>App.js</h1>
        {this.state.view ? <Dashboard toggleView={this.toggleView} /> : <Login toggleView={this.toggleView} />}
      </div>
      );
    }
}

export default App;
