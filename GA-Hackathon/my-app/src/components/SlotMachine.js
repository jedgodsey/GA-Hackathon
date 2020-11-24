import React from 'react';
import Scoreboard from './Scoreboard';
import redo from '../images/Redo_Button.svg'
import go from '../images/Go_Button.svg'

class SlotMachine extends React.Component {


  render() {
    return(
      <>
{/* left column */}
        <div className="row ">
          <div className="col-6 content-left taskDir">
            <p>find an activity</p><br />
            <div className="d-flex">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <img src={go} onClick={this.props.selector}/>
              </div>
            </div>
          </div>
{/* right column */}
          <div className="col-6 content-right taskDir">
            <div className="d-flex taskPopUp">
                <div>
                  {this.props.task}
                </div>
                <div>
                  {this.props.options.length > 0 ? <button className="btn btn-primary" onClick={this.props.onTaskComplete}>Did it!</button> : null}
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SlotMachine;
