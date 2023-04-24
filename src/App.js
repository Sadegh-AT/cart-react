import logo from "./logo.svg";
import "./App.css";

// Product
import Product from "./Components/Product/Product";

// Cart
import Cart from "./Components/Product/Cart";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [
        {
          id: 1,
          image:
            "./image/airplane_architecture_bottom_view_126215_3840x2160-min.jpg",
          price: "200",
        },
        {
          id: 2,
          image: "./image/arch_temple_architecture_126579_3840x2160-min.jpg",
          price: "610",
        },
        {
          id: 3,
          image: "./image/bridge_night_city_lighting_125945_3840x2160-min.jpg",
          price: "530",
        },
        {
          id: 4,
          image:
            "./image/eiffel_tower_paris_night_city_126429_3840x2160-min.jpg",
          price: "351",
        },
        {
          id: 5,
          image:
            "./image/facade_architecture_skyscrapers_126659_3840x2160-min.jpg",
          price: "522",
        },
        {
          id: 6,
          image:
            "./image/ferris_wheel_night_city_london_126187_3840x2160-min.jpg",
          price: "710",
        },
        {
          id: 7,
          image: "./image/london_eye-min.jpg",
          price: "407",
        },
        {
          id: 8,
          image: "./image/mountain_8--min.jpg",
          price: "610",
        },
        {
          id: 9,
          image: "./image/new_highs_in_the_sky--min.jpg",
          price: "232",
        },
        {
          id: 10,
          image: "./image/new_york_city_night_lights-min.jpg",
          price: "131",
        },
        {
          id: 11,
          image:
            "./image/skyscrapers_panorama_city_lights_126505_3840x2160-min.jpg",
          price: "431",
        },
        {
          id: 12,
          image:
            "./image/sydney_opera_house_theater_harbor_126385_3840x2160-min.jpg",
          price: "270",
        },
        {
          id: 13,
          image: "./image/tianjin-2185510_1920-min.jpg",
          price: "489",
        },
      ],
      cart: [],
    };
  }
  // printProductInfo(id) {
  //   let mainProduct = this.state.product.find((item) => item.id === id);
  //   this.setState((prev) => {
  //     return {
  //       cart: [...prev.cart, mainProduct],
  //     };
  //   });
  // }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Product products={this.state.product}></Product>
        </div>
      </div>
    );
  }
}
