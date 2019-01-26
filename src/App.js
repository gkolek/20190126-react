import React from 'react';

class App extends React.Component {
  render() {
    const myName = 'Grzegorz';
    return (
      <div>
      Hello, world and {myName}!
      <Text/>
      <Text/>
      </div>
    )
  }
}

const Text = props  => {
  return <div>
    some info from Text component
  </div>
}

export default App;
