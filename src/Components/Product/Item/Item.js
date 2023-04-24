import React, { Component } from "react";
import "./Item.css";
export default class Item extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.clickHandler = this.clickHandler.bind(this);
  // }

  clickHandler(id) {
    this.props.showProduct(id);
  }
  render() {
    let { id, image, price } = this.props;
    return (
      <div className="Item">
        <div className="item-image">
          <img src={image} alt="" />
        </div>
        <h2 className="item-price">
          {price}
          <span>$</span>
        </h2>
        <button className="item-btn" onClick={this.clickHandler.bind(this, id)}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3L6 9"
              stroke="#3D3D3D"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M9 6L3 6"
              stroke="#3D3D3D"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  }
}
