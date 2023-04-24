import React, { Component } from "react";
import "./CardItem.js.css";

export default class CardItem extends Component {
  render() {
    return (
      <div className="CartItem">
        <img className="cart-item-img" src={this.props.image} alt="" />
        <h3>
          {this.props.price}
          <span>$</span>
        </h3>
        <button className="card-item-delete">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.58334 6.875L4.58334 5.5"
              stroke="#CE2828"
              stroke-linecap="round"
            />
            <path
              d="M6.41666 6.875L6.41666 5.5"
              stroke="#CE2828"
              stroke-linecap="round"
            />
            <path
              d="M1.375 3.20833H9.625V3.20833C8.86561 3.20833 8.25 3.82394 8.25 4.58333V6.41666C8.25 7.11445 8.25 7.46334 8.16388 7.74723C7.96998 8.38644 7.46977 8.88665 6.83057 9.08055C6.54667 9.16667 6.19778 9.16667 5.5 9.16667V9.16667C4.80222 9.16667 4.45333 9.16667 4.16943 9.08055C3.53023 8.88665 3.03002 8.38644 2.83612 7.74723C2.75 7.46334 2.75 7.11445 2.75 6.41667V4.58333C2.75 3.82394 2.13439 3.20833 1.375 3.20833V3.20833Z"
              stroke="#CE2828"
              stroke-linecap="round"
            />
            <path
              d="M4.61456 1.54485C4.66678 1.49613 4.78187 1.45307 4.94196 1.42236C5.10205 1.39165 5.2982 1.375 5.49999 1.375C5.70178 1.375 5.89793 1.39165 6.05802 1.42236C6.21811 1.45307 6.33319 1.49613 6.38542 1.54485"
              stroke="#CE2828"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    );
  }
}
