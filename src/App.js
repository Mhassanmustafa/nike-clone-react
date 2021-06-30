import "./App.css";
import NikeHeader from "./component/Header";
import HomeImage from "./component/HomeImage";
import NewsHeader from "./component/NewsHeader";
import SearchMenu from "./component/SearchMenu";
import db from "./db.json";
function App() {
  return (
    <div className="App">
      <NikeHeader />
      <SearchMenu />
      <NewsHeader news={db.news} />
      <HomeImage />
    </div>
  );
}

export default App;
