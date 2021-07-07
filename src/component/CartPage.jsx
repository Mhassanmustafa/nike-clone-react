import React, { Component } from "react";
import NikeHeader from "./Header";
import Product from "./Products";
import SearchMenu from "./SearchMenu";
import Footer from "./Footer";
import Cart from "./Cart";
class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NikeHeader />
        <SearchMenu {...this.props} />
        <Cart />

        <Product data={this.props.db.trendings} />
        <Footer data={this.props.db.footer} />
      </div>
    );
  }
}

export default CartPage;
