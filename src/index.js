import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import CssBaseline from "@mui/material/CssBaseline";
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <CssBaseline />
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
