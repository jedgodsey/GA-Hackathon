import React from 'react';

class SlotMachine extends React.Component {
  state = {
    score: 0,
    options: ['option 1', 'option 2', 'option 3', 'option 4'],
    task: ''
  }

  onTaskComplete = () => {
    this.setState({score: this.state.score + 1})
  }
  
  selector = () => {
    let selection = this.state.options[Math.floor(Math.random() * this.state.options.length)]
    this.setState({
      task: selection,
      options: this.state.options.filter(item => item !== selection)
    })
    return selection;
  }

  render() {
    return(
      <>
        <h1>Slot Machine</h1>
        {this.state.task}
        <button onClick={this.selector}>give me a task</button>
        <button onClick={this.onTaskComplete}>Did it!</button>
      </>
    )
  }
}

export default SlotMachine;
