import React from 'react';
import Scoreboard from './Scoreboard';

class SlotMachine extends React.Component {


  render() {
    return(
      <>
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
        <div className="scrollable">
          <div className="items">
          </div>
        </div>
        <div>
          {this.props.task}
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.props.selector}>give me a task</button>
        </div>
        <div>
          {this.props.options.length > 0 ? <button className="btn btn-primary" onClick={this.props.onTaskComplete}>Did it!</button> : null}
        </div>
      </>
    )
  }
}

export default SlotMachine;
