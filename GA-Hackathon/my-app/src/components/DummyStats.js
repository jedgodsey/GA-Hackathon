import statsPic from "../images/02_1_1Stats_Card.svg";
import statsIcon from "../images/Stats_Icon.svg";
import profileIcon from "../images/Profile_Icon.svg";

const DummyStats = (props) => {
  return(
    <>
      <div className="tab-container">
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
