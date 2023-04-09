
import React from "react";
import ReactDOM from "react-dom/client";

import ToolTip from "./components/Tooltip";

function App() {


  // defining states 
    const [hovering,setHovering]=React.useState(false);
    const [position,setPosition]=React.useState("top");
   
  // defining event listener functions
    function handleMouseOver()
    {
      setHovering(prevHovering => !prevHovering)
    }
    
    function handleMouseOut(){
      setHovering(prevHovering => !prevHovering)

    }

    function handleClick(pos){
      
       setPosition(pos);
    }

    
  return (
    <div className="App">
      {/* defining the button positions */}
      <div className="button-position">

          <div className="select-positions">
            Select the position for hovering :
          </div>
          {/* create buttons when button is clicked the position props changes and button becomes active */}
          <button
              className= {position === "top" ? "btn active":"btn"}
              onClick={ (e) => handleClick("top")}
          
          >
            Top</button>

          <button
              className= {position === "left" ? "btn active":"btn"}
               onClick={(e) => handleClick("left")}
          >
            Left</button>

          <button
              className= {position === "right" ? "btn active":"btn"}
               onClick={(e) => handleClick("right")}
          >Right</button>

          <button
              className= {position === "bottom" ? "btn active":"btn"}
               onClick={(e) => handleClick("bottom")}
          >Bottom</button>
      </div>

       {/* the hover button */}
    <div className="hover-button-container">
      {/* adding mouseover and mouseout events */}
        <button 
          className="hover-button"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Hover Over Me ! 
        </button>
        {/* render the tooltip only if mouse is hovered over the above button */}
        {hovering && <ToolTip  position={position}/>}
    </div>
    
     
    </div>
  );
}

export default App;
