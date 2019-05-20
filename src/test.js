import React, { PureComponent } from "react";

export default class Test extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      poValue: "1111111"
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.poNumberUpdate(this.state.poValue)}>
          Click me
        </button>
      </div>
    );
  }
}
