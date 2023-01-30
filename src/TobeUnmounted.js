import React, { Component } from 'react'

export default class TobeUnmounted extends Component {
    componentWillUnmount()
    {
        console.log("Component will unmount")
    }
  render() {
    return (
      <div>TobeUnmounted</div>
    )
  }
}
