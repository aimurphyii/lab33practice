import React from "react";

import Counter from "./components/counter/counter.js";
import Increment from "./components/increment/inc.js";
import Decrement from "./components/decrement/dec.js";

// const MyContext = React.createContext(defaultValue);

export default class App extends React.Component {
  render() {
    return (
      <>
        {/* <MyContext.Provider value={/* some value */}>
        <Increment incCounter={this.incCounter} />
        <Counter state={this.state} />
        <Decrement decCounter={this.decCounter} />
      </>
    );
  }
}
