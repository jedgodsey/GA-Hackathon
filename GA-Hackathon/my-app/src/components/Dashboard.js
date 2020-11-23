import React from 'react';
import Leaderboard from './Leaderboard';
import SlotMachine from './SlotMachine';

class Dashboard extends React.Component {
  render() {
    return(
      <>
        <h1>Dasbhoard Component</h1>
        <Leaderboard />
        <SlotMachine />
      </>
    )
  }
}

export default Dashboard;
