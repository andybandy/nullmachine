import React from 'react';
import ControlPane from './ControlPane';
import Tracks from './Tracks';

class NullMachine extends React.Component {
  render() {
    return (
      <div>
        <ControlPane />
        <Tracks />
      </div>
    )
  }
}

export default NullMachine;
