import React from 'react';

class App extends React.Component {
  render() {
    const myName = 'Grzegorz';
    return (
      <div>
        <Link url="http://onet.pl" text="Onet " />
        <Link url="http://gazeta.pl" text="Gazeta " />
        Hello, world and {myName}!
        <Text title="first Text from component" />
        <Text title="second Text from component" />
      </div>
    )
  }
}

const Link = props => {
  return (
    <a href={props.url}>{props.text}</a>
  )
}

const Text = props => {
  return (
    <div>
      {props.title}
    </div>
  )
}

export default App;
