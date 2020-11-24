import statsPic from "../images/statsPic.svg";
import statsIcon from "../images/Stats_Icon.svg";
import profileIcon from "../images/Profile_Icon.svg";
import find from "../images/Find_an_Activity_Button.svg";

const DummyStats = (props) => {
  return(
    <>
      <div className="tab-container">
        <img src={find} id="find-button" onClick={props.toggleView} />
        <div className="tab dark-tab">
          <img src={statsIcon} className="tab-icon" />
        </div>
        <div className="tab light-tab" onClick={props.toggleDummy}>
          <img src={profileIcon} className="tab-icon" />
        </div>
      </div>
      <div className="dummy-background">
        <img src={statsPic} />
      </div>
    </>
  )
}

export default DummyStats;
