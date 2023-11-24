import React, { useState} from "react";
import "./Mainproject.css";
import photo from "./pc.avif";
// import fastapiContext from "../context/fastapi/fastapiContext";

const Mainproject1 = () => {
  // const { data, setData } = useContext(fastapiContext);

  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handlePredictClick = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/process?in_string=${encodeURIComponent(
          inputText
        )}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            // Add other headers if required
          },
          body: "", // Empty body for a POST request with query parameters
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log(data);
      setResult(data.uppercase);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
                onChange={handleInputChange}
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
