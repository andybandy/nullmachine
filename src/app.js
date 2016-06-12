import React from 'react';
import ReactDom from 'react-dom';

class NullMachine extends React.Component {
  render() {
    return (
      <div>
        null machine v0.0.0
      </div>
    )
  }
}

ReactDom.render(
  <NullMachine />,
  document.getElementById('app')
);
