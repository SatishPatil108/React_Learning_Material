import { render } from "@testing-library/react";
import React from "react";

const withCounter = (WrappedComponent,increment) =>{
    class withCounter extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
               count : 0
            }
         }
        
        incrementCounter = () => {
              this.setState(prevState=>{
                  return {count:prevState.count + increment}
              })
         }
    
        render() {
            console.log(this.props.name)
            return(
            <WrappedComponent 
            count={this.state.count} 
            incrementCounter={this.incrementCounter}
            {...this.props}
            />
           )
        }
    }
  return withCounter
}

export default withCounter