import React, { Component } from "react";
import url from "../../utils/urlConfig";
import { Link } from "react-router-dom";
class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart")),
    };
  }

  render() {
    return (
      <>
        <Link to={url.cart} className="basket__link">
          <svg
            width="24px"
            height="24px"
            fill="#111"
            viewBox="0 0 24 24"
            onClick={() => {
              this.props.history.push(url.cart);
            }}
          >
            <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z" />

            <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z" />
          </svg>
          {this.state.cart && this.state.cart.items.length > 0 ? (
            this.state.cart.items.length > 9 ? (
              <span
                style={{
                  display: "block",
                  position: "absolute",
                  left: "139.4px",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "12px",
                  top: "5px",
                  visibility: "visible",
                  color: "#111",
                }}
              >
                9+
              </span>
            ) : (
              <span
                style={{
                  display: "block",
                  position: "absolute",
                  left: "139.4px",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "12px",
                  top: "5px",
                  visibility: "visible",
                  color: "#111",
                }}
              >
                {this.state.cart.items.length}
              </span>
            )
          ) : null}
        </Link>
      </>
    );
  }
}

export default Basket;
