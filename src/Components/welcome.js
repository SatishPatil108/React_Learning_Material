// import React from "react";
import React ,{ Component } from "react";

class Welcome extends Component{
    render(){
        return (<h1>Welcome {this.props.name} Stark a.k.a {this.props.famousName}</h1>)
    }
}

export default Welcome;