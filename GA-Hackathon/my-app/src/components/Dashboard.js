import React from 'react';
import Scoreboard from './Scoreboard';
import SlotMachine from './SlotMachine';

class Dashboard extends React.Component {
  state = {
    view: false
  }
  toggleView = (event) => {
    event.preventDefault();
    this.setState({view: !this.state.view})
    console.log(!this.state)
  }
  render() {
    return(
      <>
        <h1>Dasbhoard Component</h1>
        {/* <Leaderboard /> */}
        {this.state.view ? <Scoreboard /> : <SlotMachine />}
        <button onClick={this.toggleView}>View Scoreboard</button>
      </>
    )
  }
}

export default Dashboard;
