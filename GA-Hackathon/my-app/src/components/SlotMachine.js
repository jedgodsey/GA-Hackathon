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
            <div className="number">option 1</div>
            <div className="number">option 2</div>
            <div className="number">option 3</div>
            <div className="number">option 4</div>
            <div className="number">option 5</div>
            <div className="number">option 6</div>
            <div className="number">option 7</div>
            <div className="number">option 8</div>
            <div className="number">option 9</div>
            <div className="number">option 10</div>
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
