import React from 'react';
import ReactDOM from 'react-dom';

class BoilerComponent extends React.Component {
  render() {
    return (
      <div>Hello, Hot Module Replacement!</div>
    );
  }
};

ReactDOM.render(
  <BoilerComponent />,
  document.getElementById('react-component-id')
);
