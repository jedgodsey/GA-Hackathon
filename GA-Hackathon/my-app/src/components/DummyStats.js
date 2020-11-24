import statsPic from "../images/02_1_1Stats_Card.svg"

const DummyStats = (props) => {
  return(
    <>
      <button onClick={props.toggleDummy}>Show Profile</button>
      <div className="dummy-background">
        <img src={statsPic} />
      </div>
    </>
  )
}

export default DummyStats;
