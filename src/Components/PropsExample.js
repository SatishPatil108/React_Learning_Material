import React from "react";

const House_Stark = props =>{
    console.log(props);
    return (
        <div>
         <h1>{props.name} Stark a.k.a {props.famousName} </h1>
         {props.children};
        </div>
    ) 
}

export default House_Stark