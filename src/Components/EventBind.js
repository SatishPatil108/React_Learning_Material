import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message  : 'Jon Snow Real Name is?'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : 'Ageon Targeryen'
    //     })
    //     console.log(this);
    // }

    clickHandler = () =>{
        this.setState({
            message : 'Ageon Targeryen'
        })
        console.log(this);
    }
    
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Ask Me</button> */}
          {/* <button onClick={() => this.clickHandler()}>Ask Me</button> */}
          <button onClick={this.clickHandler}>Ask Me</button>
      </div>
    )
  }
}

export default EventBind
