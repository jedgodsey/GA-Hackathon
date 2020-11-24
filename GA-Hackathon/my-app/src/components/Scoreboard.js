import React from 'react';

class Scoreboard extends React.Component {
  
  render() {
    console.log('scoreboard props: ', this.props)
    return(
      <div>
        <h1>Your Status</h1>
        <h2>Score: {this.props.inherit.score}</h2>
        <h2>Pending tasks: {this.props.inherit.pending}</h2>
      </div>
    )
  }
}

export default Scoreboard;
