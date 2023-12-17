import React, { useContext } from "react";
import "./Mainproject.css";
import photo from "./pc.avif";
import fastapiContext from "../context/fastapi/fastapiContext";

const Mainproject1 = () => {
  const { inputText, setInputText, result, fetchData } =
    useContext(fastapiContext);

  const handleInputClick = (event) => {
    setInputText(event.target.value);
  };

  const handlePredictClick = async () => {
    if (inputText.length < 10) {
      console.log("Please Enter Valid Question.");
      return;
    }

    await fetchData();
  };
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
            <div className="taskfill">
              {" "}
              <input
                type="text"
                className="textinput"
                placeholder="Enter your task here"
                value={inputText}
                onChange={handleInputClick}
              />
            </div>
            <div className="predictor" onClick={handlePredictClick}>
              Predict Time Using AI
            </div>
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
