import React from 'react'

const Greeting = props => {
    return (
      <div> {
        props.color
          ? `My name is ${props.name} and my favourite color is ${props.color}`
          : `My name is ${props.name}`
      }
      </div>
    )
  }

  export default Greeting