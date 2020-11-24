import React from 'react';
import DummyProfile from './DummyProfile';
import DummyStats from './DummyStats';

class DummyHolder extends React.Component {
  state = {
    showProfile: false
  }

  toggleDummy = () => {
    let newShow = !this.state.showProfile;
    this.setState({showProfile: newShow})
  }

  render() {
    return(
      <>
        {this.state.showProfile ? <DummyProfile toggleDummy={this.toggleDummy} /> : <DummyStats toggleDummy={this.toggleDummy} />}
      </>
    )
  }
}

export default DummyHolder;
