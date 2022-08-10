import React, { useEffect, useState } from "react";

const App1 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  //MISTAKE (NO DEPENDENCY)
  // useEffect(() => {
  //   console.count("useEffect runs!");
  //   document.title = `You clicked ${number} times`;
  // },);

  //CORRECT
  useEffect(() => {
    console.count("useEffect runs!");
    document.title = `You clicked ${number} times`;
  }, [number]);

  console.count("component rendered!");

  return (
    <div>
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="enter a name..."
      />
    </div>
  );
};

export default App1;
