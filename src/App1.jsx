import { useMemo, useState } from "react";

function App1() {
  const [text, setText] = useState("");

  const expensiveFunction = () => {
    console.log("function running!");
    let total = 0;
    for (let i = 1; i < 100000000; i++) {
      total += i;
    }
    return total;
  };

  const sum = expensiveFunction()

  // const sum = useMemo(() => expensiveFunction(), []);

  console.log("component rendered!");

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <span>Total: {sum}</span>
    </div>
  );
}

export default App1;
