import React, { Component } from "react";
import DontMiss from "./DontMiss";
import FeelTheBeat from "./FeelTheBeat";
import NikeHeader from "./Header";
import HomeImage from "./HomeImage";
import MoreNike from "./MoreNike";
import NewsHeader from "./NewsHeader";
import Product from "./Products";
import SearchMenu from "./SearchMenu";
import BottomList from "./BottomList";
import Footer from "./Footer";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NikeHeader />
        <SearchMenu {...this.props} />
        <NewsHeader news={this.props.db.news} />
        <HomeImage data={this.props.db.homeTopDiv} />
        <Product data={this.props.db.displayProducts} />
        <FeelTheBeat data={this.props.db.beat} />

        <Product data={this.props.db.trendings} />
        <DontMiss data={this.props.db.dontMiss} />
        <MoreNike data={this.props.db.moreNike} />
        <BottomList list={this.props.db.bottomList} />
        <Footer data={this.props.db.footer} />
      </div>
    );
  }
}

export default HomePage;
