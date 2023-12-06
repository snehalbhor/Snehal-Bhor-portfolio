import React, { useState } from "react";
import fastapiContext from "./fastapiContext.js";


const FastAPIStateContext = ({ children }) => {
 
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        // Local Host 
        // `http://127.0.0.1:8000/process?in_string=${encodeURIComponent(   

        
        // docker host
        `http://0.0.0.0:5000/process?in_string=${encodeURIComponent(      
          
          inputText
        )}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: " ",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      setResult(data.uppercase);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <fastapiContext.Provider
      value={{ inputText, setInputText, result, fetchData }}
    >
      {children}
    </fastapiContext.Provider>
  );
};

export default FastAPIStateContext;