import React from 'react';
import Scoreboard from './Scoreboard';
import redo from '../images/Redo_Button.svg'
import go from '../images/Go_Button.svg'
import bee from '../images/bee.svg';
import start from '../images/Start_Activity_Button.svg';

class SlotMachine extends React.Component {


  render() {
    return(
      <>
          <img src={bee} className="logo" />
        <div className="row ">
          <div className="col-6 content-left selection-area">

                <h3> find an activity</h3>
            <div className="d-flex taskDir p-3">
              <div className="dropdown p-3">
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
            <h3>OR</h3>
            <h4 className="teal-text" onClick={this.props.toggleView}>{this.props.view ? 'Select Another Task' : 'go to dashboard'}</h4>
          </div>
          <div className="col-6 content-right">
            <div className="d-flex taskPopUp">
                <div className="taskDir h1" id="task">
                  {this.props.task}
                </div>
                <div className="did-it p-3">
                  {this.props.options.length > 0 ? <img src={start} class="p-3" onClick={this.props.onTaskComplete} /> : null}
                <img src={redo} onClick={this.props.selector} />
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SlotMachine;
