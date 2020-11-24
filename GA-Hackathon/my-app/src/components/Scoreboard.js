import React from 'react';

class Scoreboard extends React.Component {
  
  render() {
    console.log(this.props.score)
    return(
      <div>
        <h1>Scorard</h1>
        <h2>Score: {this.props.score}</h2>
        <h2>Pending tasks: {this.props.pending}</h2>
      </div>
    )
  }
}

export default Scoreboard;
