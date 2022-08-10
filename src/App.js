import "./style.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import Home from "./Home";
import Posts from "./Posts";
import User from "./User";

function App() {
  return (
    //RUN APP1
    <App1 />

    //RUN APP2
    // <App2/>

    //RUN APP3
    // <App3/>

    //RUN APP4
    // <App4/>

    //RUN APP5 AND APP6
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="posts" element={<Post />} />
    //     <Route path="users/:id" element={<User />} />
    //   </Routes>
    // </Router>

  );
}

export default App;
