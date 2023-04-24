import React, { Component } from "react";
import "./CardItem.js.css";

export default class CardItem extends Component {
  render() {
    return (
      <div className="CardItem">
        <img src={this.props.image} alt="" />
        <h3>
          {this.props.price}
          <span>$</span>
        </h3>
        <button>Delete</button>
      </div>
    );
  }
}
