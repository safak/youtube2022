import React, { useEffect, useState } from "react";

const App4 = () => {
  const [toggle, setToggle] = useState(false);

  //HOW CLEAN-UP FUNCTIONS WORK
  useEffect(() => {
    console.log("useEffect runs!");
    //do sth with toggle

    return () => {
      console.log(
        "Wait! before running the effect, I should clear here."
      );
      //clear sth from the previous useEffect.
      console.log(
        "Okey done! You can run"
      );
    };
  }, [toggle]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default App4;
