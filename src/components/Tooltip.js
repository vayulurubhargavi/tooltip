import React from "react";

export default function ToolTip(props){
    console.log(props.position);
    return (
        // depending upon the props we receive we set our tooltip message with different styled positions
        <div className= {props.position}>
           Thanks for hovering ! I am a ToolTip
        </div>
    )
}