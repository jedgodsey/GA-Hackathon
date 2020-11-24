import profilePic from "../images/02_2_1Profile_Card.svg"

const DummyProfile = (props) => {
  return(
    <>
      <button onClick={props.toggleDummy}>Show Stats</button>
      <div className="dummy-background">
        <img src={profilePic} />
      </div>
    </>
  )
}

export default DummyProfile;
