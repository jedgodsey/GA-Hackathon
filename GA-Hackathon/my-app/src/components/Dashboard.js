import React from 'react';
import Scoreboard from './Scoreboard';
import SlotMachine from './SlotMachine';
import DummyHolder from './DummyHolder';

class Dashboard extends React.Component {
  state = {
    view: false,
    score: 0,
    options: ['go for a run!', 'vacuum the living room', 'write a blog post', 'clean the fridge'],
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
    // let selection = this.state.options[Math.floor(Math.random() * this.state.options.length)]
    let selection = this.state.options[0]
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
        {this.state.view ? <DummyHolder toggleView={this.toggleView} /> : <SlotMachine onTaskComplete={this.onTaskComplete} selector={this.selector} toggleView={this.toggleView} task={this.state.task} options={this.state.options} view={this.state.view} />}
        {/* {this.state.view ? <Scoreboard inherit={this.state} /> : <SlotMachine onTaskComplete={this.onTaskComplete} selector={this.selector} task={this.state.task} options={this.state.options} />} */}
        {/* <button className="btn btn-primary" onClick={this.toggleView}>{this.state.view ? 'Select Another Task' : 'go to dashboard'}</button> */}
      </>
    )
  }
}

export default Dashboard;
