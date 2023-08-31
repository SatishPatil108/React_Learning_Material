import React ,{ Component } from "react";

class Message extends Component{
    constructor()
    {
        super();
        this.state = {
            message : 'Robb Stark King in the North'
        }
    }

    changeMessage(){
        this.setState({
            message : 'Jon Snow is King in the North Know'
        })
    }
    render(){
        return (
        <div>
           <h1>{this.state.message}</h1>
           <button onClick = {()=>this.changeMessage()}>After Me</button>
        </div>)
    }
}

export default Message;