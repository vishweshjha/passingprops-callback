import React, { PureComponent } from "react";
import Test from "./test";

export default class Parent extends PureComponent {
  constructor(props) {
    super(props);
    this.poNumberUpdate = this.poNumberUpdate.bind(this);
    this.state = {
      number: "3"
    };
  }
  poNumberUpdate = value => {
    this.setState({ number: value });
  };
  render() {
    return (
      <div>
        {this.state.number} Vishwesh
        <Test poNumberUpdate={this.poNumberUpdate} />
      </div>
    );
  }
}
