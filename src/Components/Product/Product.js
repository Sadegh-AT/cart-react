import React, { Component, Fragment } from "react";
import "./Product.css";
import Item from "./Item/Item";
import CardItem from "./Item/CardItem";
import ProductSvg from "../Svg/ProductSvg";
import CartSvg from "../Svg/CartSvg";
import DeleteSvg from "../Svg/DeleteSvg";
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
              <ProductSvg></ProductSvg>
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
              <CartSvg></CartSvg>
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
