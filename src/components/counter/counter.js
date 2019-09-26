import React, { useContext } from "react";
import Increment from "../increment/inc.js";
import { counterContext } from "../context/context";
const Count = props => {
  // const [count, setCount] = useState(0);

  const context = useContext(counterContext);

  const styles = {
    container: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "40%"
    },
    counter: {
      display: "inline-block",
      fontSize: "1em",
      border: "2px solid #444",
      borderRadius: "50%",
      lineHeight: "5em",
      textAlign: "center",
      width: "5em"
    },
    button: {
      height: "3em"
    }
  };

  return (
    <div style={styles.container}>
      {/* <button style={styles.button} onClick={props.state.decCounter}>
        {" "}
        -{" "}
      </button> */}
      <span style={styles.counter}>{context.counter}</span>
      {/* <button style={styles.button} onClick={props.state.incCounter}>
        {" "}
        +{" "}
      </button> */}
    </div>
  );
};

export default Count;
