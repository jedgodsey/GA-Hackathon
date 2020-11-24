import React from 'react';

class Scoreboard extends React.Component {
  
  render() {
    console.log('scoreboard props: ', this.props)
    return(
      <div>
        <h1>Your Status</h1>
        <h2>Score: {this.props.inherit.score}</h2>
        <h2>Pending tasks: {this.props.inherit.pending}
        <h3>Time To Complete: 30:00</h3>
        </h2>
        <h2>Completed tasks: {this.props.inherit.completed}</h2>
      </div>
    )
  }
}

export default Scoreboard;
