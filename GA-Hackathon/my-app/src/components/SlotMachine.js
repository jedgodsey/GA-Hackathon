import React from 'react';
import Scoreboard from './Scoreboard';
import redo from '../images/Redo_Button.svg'
import go from '../images/Go_Button.svg'

class SlotMachine extends React.Component {


  render() {
    return(
      <>
        <div className="row ">
          <div className="col-6 content-left">
            <div className="d-flex taskDir p-3">
              <div className="dropdown p-3">
            <p class="p-3"> find an activity</p>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  suprise me!
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">house</a>
                  <a className="dropdown-item" href="#">community</a>
                  <a className="dropdown-item" href="#">self care</a>
                  <a className="dropdown-item" href="#">family</a>
                  <a className="dropdown-item" href="#">fitness</a>
                </div>
              </div>
              <div>
                <img src={go} class="p-3" onClick={this.props.selector}></img>
              </div>
            </div>
          </div>
          <div className="col-6 content-right">
            <div className="d-flex taskPopUp">
                <div className="taskDir h1" id="task">
                  {this.props.task}
                </div>
                <div className="did-it">
                  {this.props.options.length > 0 ? <button className="did-btn" onClick={this.props.onTaskComplete}>Did it!</button> : null}
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SlotMachine;
