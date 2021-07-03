import "./App.css";
import DontMiss from "./component/DontMiss";
import FeelTheBeat from "./component/FeelTheBeat";
import NikeHeader from "./component/Header";
import HomeImage from "./component/HomeImage";
import MoreNike from "./component/MoreNike";
import NewsHeader from "./component/NewsHeader";
import Product from "./component/Products";
import SearchMenu from "./component/SearchMenu";
import BottomList from "./component/BottomList";
import Footer from "./component/Footer";
import db from "./db.json";
function App() {
  return (
    <div className="App">
      <NikeHeader />
      <SearchMenu />
      <NewsHeader news={db.news} />
      <HomeImage data={db.homeTopDiv} />
      <Product data={db.displayProducts} />
      <FeelTheBeat data={db.beat} />
      <Product data={db.trendings} />
      <DontMiss data={db.dontMiss} />
      <MoreNike data={db.moreNike} />
      <BottomList list={db.bottomList} />
      <Footer data={db.footer} />
      {/* <MoreNike /> */}
      {/* <FeelTheBeat /> */}
      {/* <HomeImage data={db.homeTopDiv} /> */}
    </div>
  );
}

export default App;
