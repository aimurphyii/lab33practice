import React from "react";
import ReactDOM from "react-dom";

import App from "./app.js";
import ContextProvider from "./components/context/context";
class Main extends React.Component {
  render() {
    return (
      <ContextProvider>
        <App />
      </ContextProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
