import React, { useContext } from "react";

import { counterContext } from "../context/context";

const Decrement = () => {
  const context = React.useContext(counterContext);
  return <button onClick={context.decCounter}> - </button>;
};

export default Decrement;
