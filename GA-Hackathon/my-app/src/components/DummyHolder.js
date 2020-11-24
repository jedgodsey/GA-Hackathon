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
        {this.state.showProfile ? <DummyProfile toggleView={this.props.toggleView} toggleDummy={this.toggleDummy} /> : <DummyStats toggleView={this.props.toggleView} toggleDummy={this.toggleDummy} />}
      </>
    )
  }
}

export default DummyHolder;
