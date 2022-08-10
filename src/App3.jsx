import React, { useEffect, useState } from "react";

const App3 = () => {
  const [number, setNumber] = useState(0);

  //WRONG (DO NOT UPDATE USING THE STATE ITSELF)
  // useEffect(() => {
  //   console.log("useeffect runs")
  //   setInterval(() => {
  //     setNumber(number + 1);
  //   }, [1000]);
  // }, [number]);

  //NO CLEAN-UP
  // useEffect(() => {
  //   console.log("useeffect runs")
  //   setInterval(() => {
  //     setNumber((prev) => prev + 1);
  //   }, [1000]);
  // }, []);

  //CORRECT
  useEffect(() => {
    console.log("useeffect runs");
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, [1000]);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{number}</div>;
};

export default App3;
