import React, { useState } from "react";
import fastapiContext from "./fastapiContext.js";

const FastAPIState = ({ children }) => {
  const [data, setData] = useState(null); // Example state/data

  // Functions or logic to manipulate the shared data

  return (
    <fastapiContext.Provider value={{ data, setData }}>
      {children}
    </fastapiContext.Provider>
  );
};

export default FastAPIState;
