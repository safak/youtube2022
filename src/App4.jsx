import { useEffect, useMemo, useState } from "react";
import Expensive from "./Expensive";

function App4() {
  //   const [name, setName] = useState("");

  //   return (
  //     <div>
  //       <input onChange={(e) => setName(e.target.value)} placeholder="name" />
  //       <Expensive />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Form /> 
      <Expensive />
    </div>
  );
}

const Form = () => {
  const [name, setName] = useState("");
  return <input onChange={(e) => setName(e.target.value)} placeholder="name" />;
};

export default App4;
