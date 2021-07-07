import React, { Component } from "react";
import NikeHeader from "./Header";
import NewsHeader from "./NewsHeader";
import Product from "./Products";
import SearchMenu from "./SearchMenu";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("id = ", this.props.match.params.productId);
  }

  render() {
    return (
      <div className="App">
        <NikeHeader />
        <SearchMenu {...this.props} />
        <NewsHeader news={this.props.db.news} />
        <ProductDetails data={this.props.product} {...this.props} />
        <Product data={this.props.db.trendings} />
        <Footer data={this.props.db.footer} />
      </div>
    );
  }
}

export default ProductPage;
