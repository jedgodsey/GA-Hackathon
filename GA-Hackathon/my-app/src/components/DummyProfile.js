import profilePic from "../images/02_2_1Profile_Card.svg";
import statsIcon from "../images/Stats_Icon.svg";
import profileIcon from "../images/Profile_Icon.svg";

const DummyProfile = (props) => {
  return(
    <>
      <div className="tab-container">
        <div className="tab light-tab" onClick={props.toggleDummy}>
          <img src={statsIcon} className="tab-icon" />
        </div>
        <div className="tab dark-tab">
          <img src={profileIcon} className="tab-icon" />
        </div>
      </div>
      <div className="dummy-background">
        <img src={profilePic} />
      </div>
    </>
  )
}

export default DummyProfile;
