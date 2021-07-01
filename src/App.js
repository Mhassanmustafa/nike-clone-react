import "./App.css";
import FeelTheBeat from "./component/FeelTheBeat";
import NikeHeader from "./component/Header";
import HomeImage from "./component/HomeImage";
import NewsHeader from "./component/NewsHeader";
import Product from "./component/Products";
import SearchMenu from "./component/SearchMenu";
import db from "./db.json";
function App() {
  return (
    <div className="App">
      <NikeHeader />
      <SearchMenu />
      <NewsHeader news={db.news} />
      <HomeImage data={db.homeTopDiv} />
      <Product data={db.displayProducts} />
      <FeelTheBeat />
      {/* <HomeImage data={db.homeTopDiv} /> */}
    </div>
  );
}

export default App;
