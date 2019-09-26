import React, { useContext } from "react";

// const Increment = props => {
//   return <button onClick={props.incCounter}> + </button>;
// };

import { counterContext } from "../context/context";

const Increment = () => {
  const context = useContext(counterContext);
  return <button onClick={context.incCounter}> + </button>;
};

export default Increment;
