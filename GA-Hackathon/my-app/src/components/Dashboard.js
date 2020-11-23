import React from 'react';
import Leaderboard from './Leaderboard';
import Scoreboard from './Scoreboard';
import SlotMachine from './SlotMachine';

class Dashboard extends React.Component {
  render() {
    return(
      <>
        <h1>Dasbhoard Component</h1>
        <Leaderboard />
        <Scoreboard />
        <SlotMachine />
      </>
    )
  }
}

export default Dashboard;
