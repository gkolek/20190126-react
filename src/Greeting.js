import React from 'react'

class Greeting extends React.Component {
    render() {
        const { name, color } = this.props
        return (
            <div> {
                color
                    ? `Hi, my name is ${name} and my favourite color is ${color}`
                    : `Hi, my name is ${name}`
            }
            </div>
        )
    }
}
export default Greeting