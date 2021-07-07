import "./App.css";
import db from "./db.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./component/HomePage";
import React, { Component } from "react";
import url from "./utils/urlConfig";
import ProductPage from "./component/ProductPage";
import CartPage from "./component/CartPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={url.home}
          render={(props) => {
            return <HomePage db={db} {...props} />;
          }}
        />
        <Route
          exact
          path={url.product}
          render={(props) => {
            let id = props.match.params.productId;
            let filteredProduct = db.displayProducts.products.filter((item) => {
              return item.id === parseInt(id);
            });
            if (filteredProduct.length > 0 && filteredProduct[0].containsData) {
              return (
                <ProductPage db={db} product={filteredProduct[0]} {...props} />
              );
            } else {
              return <Redirect to={url.home} />;
            }
          }}
        />

        <Route
          exact
          path={url.cart}
          render={(props) => {
            return <CartPage db={db} {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
