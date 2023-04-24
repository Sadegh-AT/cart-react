import React, { Component } from "react";
import "./CardItem.js.css";
import DeleteSvg from "../../Svg/DeleteSvg";

export default class CardItem extends Component {
  deleteHandler(id) {
    this.props.delete(id);
  }
  render() {
    let { id, image, price } = this.props;
    return (
      <div className="CartItem">
        <img className="cart-item-img" src={image} alt="" />
        <h3>
          {price}
          <span>$</span>
        </h3>
        <button
          className="card-item-delete"
          onClick={this.deleteHandler.bind(this, id)}
        >
          <DeleteSvg></DeleteSvg>
        </button>
      </div>
    );
  }
}
