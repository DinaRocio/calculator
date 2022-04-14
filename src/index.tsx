import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/globalStyles";
import ContextProvider from "./reducer/context";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
