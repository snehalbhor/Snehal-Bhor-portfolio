import React, { useState } from "react";
import './Mainproject.css'
import photo from './pc.avif'

const Mainproject1 = () => {
  const [result, setResult] = useState(''); 

  return (
    <div>
      <div className="headdiv">
        <div className="partone">
          
        <img src={photo} alt="" />
        </div>

        <div className="parttwo">
          <div className="titlediv">
            <div className="wfh">Work From Home</div>
            <div className="task">Task Productivity</div>
            <div className="ent">Enhancer</div>
            
          </div>

          <div className="taskdiv">
            <div className="taskfill">   <input type="text" className="textinput" placeholder="Enter your task here" /></div>
            <div className="predictor">Predict Time Using AI</div>
          </div>

          <div className="result">
            <div className="resultin">{result}</div>
          
          </div>


        </div>
      </div>
    </div>
  );
};

export default Mainproject1;
