import { useEffect, useMemo, useState } from "react";
import Expensive from "./Expensive";

function App5() {
  // const [backgroundColor, setBackgroundColor] = useState("white");

  // return (
  //   <div style={{ backgroundColor }}>
  //     <input onChange={(e) => setBackgroundColor(e.target.value)} />
  //     <Expensive />
  //   </div>
  // );

  return (
    <BgProvider>
      <Expensive />
    </BgProvider>
  );
}

const BgProvider = ({ children }) => {
  let [backgroundColor, setBackgroundColor] = useState("white");
  return (
    <div style={{ backgroundColor }}>
      <input onChange={(e) => setBackgroundColor(e.target.value)} />
      {children}
    </div>
  );
};

export default App5;
