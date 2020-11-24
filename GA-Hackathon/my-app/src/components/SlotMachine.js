import React from 'react';
import Scoreboard from './Scoreboard';

class SlotMachine extends React.Component {
  state = {
    score: 0,
    options: ['option 1', 'option 2', 'option 3', 'option 4'],
    task: '',
    pending: []
  }

  onTaskComplete = () => {
    this.setState({score: this.state.score + 1})
  }
  
  selector = () => {
    let selection = this.state.options[Math.floor(Math.random() * this.state.options.length)]
    console.log('selection: ', selection)
    console.log('state pending', this.state.pending)
    let newPending = this.state.pending.push(selection);
    // let newOptions = this.state.options.filter(item => item !== selection)
    this.setState({
      task: selection,
      // options: newOptions,
      pending: newPending
    })
    return selection;
  }

  render() {
    return(
      <>
        <Scoreboard score={this.state.score} pending={this.state.pending} />
        <h1>Slot Machine</h1>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        {this.state.task}
        <button onClick={this.selector}>give me a task</button>
        <button onClick={this.onTaskComplete}>Did it!</button>
      </>
    )
  }
}

export default SlotMachine;
