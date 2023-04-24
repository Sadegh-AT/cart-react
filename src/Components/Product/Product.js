import React, { Component, Fragment } from "react";
import "./Product.css";
import Item from "./Item/Item";
import CardItem from "./Item/CardItem";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.products,
      cardItems: [],
    };
  }
  printProductInfo(id) {
    let mainProduct = this.state.items.find((item) => item.id === id);

    this.setState((prev) => {
      return {
        cardItems: [...prev.cardItems, mainProduct],
      };
    });
  }
  deleteItem(id) {
    console.log(
      "%cComing Soon!",
      "color:lightgreen; font-size:1.3rem;font-weight:900"
    );
  }
  render() {
    return (
      <Fragment>
        <div className="Product">
          <div className="product-container">
            <div className="product-logo-place">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
                  stroke="#E4A13C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 11V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V11"
                  stroke="#E4A13C"
                  stroke-width="2"
                />
                <path
                  d="M4.62127 4.51493C4.80316 3.78737 4.8941 3.42359 5.16536 3.21179C5.43663 3 5.8116 3 6.56155 3H17.4384C18.1884 3 18.5634 3 18.8346 3.21179C19.1059 3.42359 19.1968 3.78737 19.3787 4.51493L20.5823 9.32938C20.6792 9.71675 20.7276 9.91044 20.7169 10.0678C20.6892 10.4757 20.416 10.8257 20.0269 10.9515C19.8769 11 19.6726 11 19.2641 11V11C18.7309 11 18.4644 11 18.2405 10.9478C17.6133 10.8017 17.0948 10.3625 16.8475 9.76781C16.7593 9.55555 16.7164 9.29856 16.6308 8.78457V8.78457C16.6068 8.64076 16.5948 8.56886 16.5812 8.54994C16.5413 8.49439 16.4587 8.49439 16.4188 8.54994C16.4052 8.56886 16.3932 8.64076 16.3692 8.78457L16.2877 9.27381C16.2791 9.32568 16.2747 9.35161 16.2704 9.37433C16.0939 10.3005 15.2946 10.9777 14.352 10.9995C14.3289 11 14.3026 11 14.25 11V11C14.1974 11 14.1711 11 14.148 10.9995C13.2054 10.9777 12.4061 10.3005 12.2296 9.37433C12.2253 9.35161 12.2209 9.32568 12.2123 9.27381L12.1308 8.78457C12.1068 8.64076 12.0948 8.56886 12.0812 8.54994C12.0413 8.49439 11.9587 8.49439 11.9188 8.54994C11.9052 8.56886 11.8932 8.64076 11.8692 8.78457L11.7877 9.27381C11.7791 9.32568 11.7747 9.35161 11.7704 9.37433C11.5939 10.3005 10.7946 10.9777 9.85199 10.9995C9.82887 11 9.80258 11 9.75 11V11C9.69742 11 9.67113 11 9.64801 10.9995C8.70541 10.9777 7.90606 10.3005 7.7296 9.37433C7.72527 9.35161 7.72095 9.32568 7.7123 9.27381L7.63076 8.78457C7.60679 8.64076 7.59481 8.56886 7.58122 8.54994C7.54132 8.49439 7.45868 8.49439 7.41878 8.54994C7.40519 8.56886 7.39321 8.64076 7.36924 8.78457V8.78457C7.28357 9.29856 7.24074 9.55555 7.15249 9.76781C6.90524 10.3625 6.38675 10.8017 5.75951 10.9478C5.53563 11 5.26905 11 4.73591 11V11C4.32737 11 4.12309 11 3.97306 10.9515C3.58403 10.8257 3.31078 10.4757 3.28307 10.0678C3.27239 9.91044 3.32081 9.71675 3.41765 9.32938L4.62127 4.51493Z"
                  stroke="#E4A13C"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="product-items">
              {this.state.items.map((item) => (
                <Item
                  key={item.id}
                  {...item}
                  showProduct={this.printProductInfo.bind(this)}
                ></Item>
              ))}
            </div>
          </div>
        </div>
        <div className="Cart">
          <div className="cart-container">
            <div className="cart-logo-place">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15L10 12"
                  stroke="#E4A13C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M8 5L6 9M16 5L18 9"
                  stroke="#E4A13C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M14 15L14 12"
                  stroke="#E4A13C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 9V9C3.4886 9 3.7329 9 3.94853 9.04823C4.50266 9.17219 4.97798 9.52584 5.25594 10.021C5.3641 10.2137 5.4343 10.4477 5.5747 10.9157L7.14482 16.1494C7.55677 17.5226 7.76275 18.2092 8.2942 18.6046C8.82565 19 9.54247 19 10.9761 19H13.0239C14.4575 19 15.1744 19 15.7058 18.6046C16.2372 18.2092 16.4432 17.5226 16.8552 16.1494L18.4253 10.9157C18.5657 10.4477 18.6359 10.2137 18.7441 10.021C19.022 9.52584 19.4973 9.17219 20.0515 9.04823C20.2671 9 20.5114 9 21 9V9"
                  stroke="#E4A13C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 9L21 9"
                  stroke="#E4A13C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="cart-items">
              {this.state.cardItems.map((item) => (
                <CardItem
                  key={item.id}
                  {...item}
                  delete={this.deleteItem.bind(this)}
                ></CardItem>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
