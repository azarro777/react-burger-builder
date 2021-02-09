import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

export default class BurgerBuilder extends Component {
  state = {
    ingedients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingedients} />
        <div>Build control</div>
      </Aux>
    );
  }
}