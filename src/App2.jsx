import { useMemo, useState } from "react";

function App2() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const expensiveFunction = (n) => {
    console.log("function running!");
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  };

  const sum = useMemo(() => expensiveFunction(number), [number]);

  console.log("component rendered!");

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <span>Total: {sum}</span>
    </div>
  );
}

export default App2;
