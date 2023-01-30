import React, { Component } from 'react'
import TobeUnmounted from './TobeUnmounted';

export default class Lifecycle extends Component {
    constructor(props) {       //Initialization
        super(props);
        this.state = { hello: "Hello!" ,inp:"",mount:true}
        console.log('Initialization')
    }
    UNSAFE_componentWillMount()
    {
        console.log('Component will Mount')
    }

    componentDidMount()
    {
        console.log('Component did Mount')
    }

    changeState()
    {
        this.setState({hello:"Change state"})
    }
    render() {
        console.log("Render")
        return (
            <div> State Value:{this.state.hello}
             <div>
                 <input type='value' value={this.state.inp} onChange={(event)=>{
                    const updatedState={...this.state};
                    updatedState.inp=event.target.value;
                    this.setState(updatedState)
                 }} />
             </div>
             <button onClick={()=>{
                 const updatedState={...this.state};
                 updatedState.mount=false;
                 this.setState(updatedState)
             }}>Click to Unmount from DOM</button>
                {this.state.mount && <TobeUnmounted />}
                </div>
        )
    }
    shouldComponentUpdate(newProps,newstate)
    {
        console.log("Should component Update" ,newProps,newstate)
        return true;
    }
    UNSAFE_componentWillUpdate()
    {
        console.log("Component Will Update")
    }
    componentDidUpdate()
    {
        console.log("Component did Update")
    }
}
