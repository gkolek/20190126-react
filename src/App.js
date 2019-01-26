import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Text from './Text.js'
import Header from './Header.js'
import Greeting from './Greeting.js'

import Home from './Home'
import News from './News'
import Team from './Team'
import About from './About'

const links = [
  { url: "./", text: "Home " },
  { url: "./News", text: "News " },
  { url: "./Team", text: "Team " },
  { url: "./About", text: "About" }
]
class App extends React.Component {
  render() {
    const myName = 'Grzegorz';
    return (
      <BrowserRouter>
        <div>
          Hello, world and {myName}!
          <Header links={links} />
          <Route path="/" exact component={Home} />
          <Route path="/News" component={News} />
          <Route path="/Team" component={Team} />
          <Route path="/About" component={About} />
          <Text title="first Text from component" />
          <Text title="second Text from component" />
          <Greeting name="Tom" />
          <Greeting color="black" />
          <Greeting name="Tom" color="black" />
        </div>
      </BrowserRouter>)
  }
}
export default App;
