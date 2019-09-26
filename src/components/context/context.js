import React from "react";

export const counterContext = React.createContext();

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      incCounter: this.incCounter,
      decCounter: this.decCounter
    };
  }

  incCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <counterContext.Provider value={this.state}>
        {this.props.children}
      </counterContext.Provider>
    );
  }
}

export default ContextProvider;
