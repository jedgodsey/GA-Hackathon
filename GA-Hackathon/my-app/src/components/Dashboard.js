import React from 'react';
import Scoreboard from './Scoreboard';
import SlotMachine from './SlotMachine';

class Dashboard extends React.Component {
  state = {
    view: false,
    score: 0,
    options: ['option 1', 'option 2', 'option 3', 'option 4'],
    task: '',
    pending: [],
    completed:[]
  }

  onTaskComplete = () => {
    let newCompleted = this.state.completed.concat(this.state.task);
    let newPending = this.state.pending.filter(item => item !== this.state.task)
    this.setState({
      score: this.state.score + 1,
      completed: newCompleted,
      pending: newPending,
      task: ''
    })
  }
  
  selector = () => {
    let selection = this.state.options[Math.floor(Math.random() * this.state.options.length)]
    let newPending = this.state.pending.concat(selection);
    let newOptions = this.state.options.filter(item => item !== selection)
    this.setState({
      task: selection,
      options: newOptions,
      pending: newPending
    })
    return selection;
  }
  toggleView = (event) => {
    event.preventDefault();
    this.setState({view: !this.state.view})
  }
  render() {
    return(
      <>
        {this.state.view ? <Scoreboard inherit={this.state} /> : <SlotMachine onTaskComplete={this.onTaskComplete} selector={this.selector} task={this.state.task} options={this.state.options} />}
        <button className="btn btn-primary" onClick={this.toggleView}>{this.state.view ? 'Select Another Task' : 'View Your Status'}</button>
      </>
    )
  }
}

export default Dashboard;
