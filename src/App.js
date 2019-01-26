import React from 'react';

import Text from './Text.js'
import Link from './Link.js'
import Greeting from './Greeting.js'


class App extends React.Component {
  render() {
    const myName = 'Grzegorz';
    return (
      <div>
        <p>
          <Link url="http://onet.pl" text="Onet " />
        </p>
        <p>
          <Link url="http://gazeta.pl" text="Gazeta " />
        </p>
        Hello, world and {myName}!
        <Text title="first Text from component" />
        <Text title="second Text from component" />
        <Greeting name="Tom" color="black" />
        <Greeting color="black" />
        <Greeting name="Tom" />
      </div>
    )
  }
}
export default App;
