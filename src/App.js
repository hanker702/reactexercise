import React, { useState } from 'react';
import './App.css';
import Box from './Box'

function App() {
  //0: black, 1: red, 2: green
  const [boxes, setBoxes] = useState([{colorCode: 0}])   //default boxex, by default, there is only one box.
  const [scroll, setScroll] = useState(false)

  //colorCode: source box color, dulicated box should have same color as the source box
  //index: source box index, dulicated box should be put next to source box, not the end of all boxes
  function duplicate(colorCode, index) {
    const newBoxes = boxes.slice(0);   //can't change the state directly, should copy a new one
    newBoxes.splice(index + 1, 0, {colorCode})  //put new box next to source box
    setBoxes(newBoxes); 
    if (newBoxes.length > 2) {
      setScroll(true);
    }     
  } 

  //index: the box which is actived
  function changeColor(index)  {
    const newBoxes = boxes.slice(0);
    //only 3 colors, if the color is the last one, go back to the first one
    let newColorCode = newBoxes[index].colorCode === 2 ? 0 : newBoxes[index].colorCode + 1;
    newBoxes[index].colorCode = newColorCode;
    setBoxes(newBoxes)    
  }   

  //reset to default, only one box there
  function resetBoxex() {
    setBoxes([{colorCode: 0}])
    setScroll(false);
  }

  return (
        <div className="container">
          <button onClick={resetBoxex}>Reset</button>
          <div className={['boxes-center', scroll ? 'boxes-scroll' : ''].join(" ")}>
            {
              boxes.map((box, index) => (
                <Box 
                  duplicate={duplicate} 
                  changeColor={changeColor}
                  colorCode={box.colorCode}
                  indexInBox={index}
                  key={index}/>       
              ))
            }
          </div>
        </div>    
  )
}

export default App;
