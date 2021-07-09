import React, { Component } from "react";
import "./css/Cart.css";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: {},
      subTotal: 0.0,
      delivery: 10.95,
      total: 0,
      quantity: 0,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    let cartData = JSON.parse(localStorage.getItem("cart"));

    if (cartData) {
      this.setState({ cartData: cartData });
      this.changePrice(cartData);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleDataRemove = (e) => {
    let cartData = this.state.cartData.items;

    let dataIndex = cartData.filter((data) => {
      return data !== e;
    });

    this.setState({ cartData: { items: dataIndex } });
    if (dataIndex) {
      this.changePrice({ items: dataIndex });
    }

    localStorage.setItem("cart", JSON.stringify({ items: dataIndex }));
  };

  changePrice = (data) => {
    let Totalprice = 0.0;

    for (let i = 0; i < data.items.length; i++) {
      let price =
        data.items[i].quantity *
        parseInt(data.items[i].price.slice(1, data.items[i].price.length));

      Totalprice += price;
    }

    this.setState({
      subTotal: Totalprice,
    });
  };

  handleQuantityChange = (e, d) => {
    let filteredData = this.state.cartData.items.filter((data) => {
      return data !== d;
    });

    let index = this.state.cartData.items.findIndex((data) => {
      return data === d;
    });

    let cartData = d;

    cartData.quantity = e.target.value;
    cartData.subTotal =
      e.target.value * parseInt(cartData.price.slice(1, cartData.price.length));

    filteredData.splice(index, 0, cartData);

    this.changePrice({ items: filteredData });
    localStorage.setItem("cart", JSON.stringify({ items: filteredData }));
    this.setState({ cartData: { items: filteredData } });
  };

  handleSizeChange = (e) => {};
  render() {
    return (
      <>
        <div className="container-fluid">
          <main className="cart__main">
            <div className="row main__row full__width cart__div">
              <div className="col col-md-8 mobile__bag">
                <h4 class="div__title mobile__bag__title">Bag</h4>
                {/* {this.state.width <= 450 ? (
                  <>
                    <div className="col col-md-12 mobile__item">
                      0 Items |
                      <span className="mobile__price__span">$0.00</span>
                    </div>
                  </>
                ) : null} */}
                {!this.state.cartData.items ||
                this.state.cartData.items.length <= 0 ? (
                  <>
                    <div className="col col-md-12 no__item">
                      <p style={{ fontSize: "16px" }}>
                        There are no items in your bag.
                      </p>
                    </div>
                  </>
                ) : null}
                {this.state.cartData.items &&
                this.state.cartData.items.length > 0
                  ? this.state.cartData.items.map((data) => {
                      return (
                        <div className="row">
                          <div className="product__main__div">
                            <div className="product__sub__div">
                              <figure className="product__Thumbnail">
                                <img
                                  className="product__image"
                                  src={data.cartImageUrl}
                                  alt="Nike Blazer Mid '77 Vintage"
                                />
                              </figure>

                              <div className="product__detail">
                                <div className="row">
                                  <div className="col col-md-8">
                                    <a href="#" className="product__link">
                                      <p className="product__name">
                                        {data.title}
                                      </p>
                                    </a>
                                    <div className="shoes__description">
                                      {data.description}
                                    </div>
                                    <div className="shoes__description">
                                      {data.color}
                                    </div>
                                    <div className="drop__down__div">
                                      <div className="first__cell">
                                        <label
                                          htmlFor="#"
                                          className="dropdown__label"
                                        >
                                          Size
                                        </label>
                                        <div className="drop__div">
                                          <div
                                            className="drop__down--icon"
                                            style={{ paddingRight: "20px" }}
                                          ></div>
                                          <select className="drop__down__select">
                                            {data.sizes && data.sizes.length > 0
                                              ? data.sizes.map((opt) => {
                                                  return (
                                                    <option
                                                      value={opt.value}
                                                      selected={
                                                        String(opt.value) ===
                                                        data.selectedSize
                                                          ? "true"
                                                          : null
                                                      }
                                                    >
                                                      {opt.value}
                                                    </option>
                                                  );
                                                })
                                              : null}
                                          </select>
                                        </div>
                                      </div>
                                      <div
                                        className="first__cell"
                                        style={{ paddingLeft: "0px" }}
                                      >
                                        <label
                                          htmlFor="#"
                                          className="dropdown__label"
                                        >
                                          Quantity
                                        </label>
                                        <div className="drop__div">
                                          <div
                                            className="drop__down--icon"
                                            style={{ right: "0px" }}
                                          ></div>
                                          <select
                                            className="drop__down__select"
                                            key={data.productId}
                                            onChange={(e) =>
                                              this.handleQuantityChange(e, data)
                                            }
                                          >
                                            {[
                                              1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                                            ].map((opt) => {
                                              return (
                                                <option
                                                  selected={
                                                    parseInt(data.quantity) ===
                                                    opt
                                                      ? "true"
                                                      : false
                                                  }
                                                  value={opt}
                                                >
                                                  {opt}
                                                </option>
                                              );
                                            })}
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col col-md-4">
                                    <span className="singlePrice">
                                      <span
                                        className="price"
                                        key={data.productId}
                                      >
                                        $
                                        {data.subTotal
                                          ? data.subTotal
                                          : data.price.slice(
                                              1,
                                              data.price.length
                                            )}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12 button__div__under__product">
                                <ul className="button__ul">
                                  <li className="button__list">
                                    <button className="list__button">
                                      Move to Favourites
                                    </button>
                                  </li>
                                  <li className="button__list">
                                    <button
                                      onClick={() =>
                                        this.handleDataRemove(data)
                                      }
                                      className="list__button"
                                    >
                                      Remove
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>

              <div className="col col-md-4 " id="summary__description">
                <h4 class="div__title">Summary</h4>
                <div className="row">
                  <div className="col col-md-9">
                    <p className="summary__left">
                      Subtotal
                      <span>
                        <div className="know__more">
                          <i className="question"></i>
                        </div>
                      </span>
                    </p>
                  </div>
                  <div className="col col-md-3">
                    <p className="summary__right">
                      ${parseFloat(this.state.subTotal).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-md-9">
                    <p className="summary__left estimate_left">
                      Estimated Delivery & Handling
                    </p>
                  </div>
                  <div className="col col-md-3">
                    <p className="summary__right estimate_right">
                      $
                      {!this.state.cartData.items ||
                      this.state.cartData.items.length <= 0
                        ? "0.00"
                        : this.state.delivery}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-md-9 ">
                    <p className="summary__left" style={{ top: "-5px" }}>
                      Taxes
                    </p>
                  </div>
                  <div className="col col-md-3">
                    <p className="summary__right" style={{ top: "-5px" }}>
                      —
                    </p>
                  </div>
                </div>
                <hr className="summary__hr" />
                <div className="row">
                  <div className="col col-md-9 ">
                    <p className="total__left">Total</p>
                  </div>
                  <div className="col col-md-3">
                    <p className="total__right">
                      $
                      {parseFloat(
                        (!this.state.cartData.items ||
                        this.state.cartData.items.length <= 0
                          ? 0.0
                          : this.state.delivery) + this.state.subTotal
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
                <hr className="summary__hr" style={{ marginTop: "11px" }} />
                <div className="row button__div">
                  <div className="col col-md-12 button__row">
                    <button
                      className={`checkOut__buttons ${
                        !this.state.cartData.items ||
                        this.state.cartData.items.length <= 0
                          ? "button___disable"
                          : null
                      }`}
                    >
                      Guest Checkout
                    </button>
                    <button
                      className={`checkOut__buttons ${
                        !this.state.cartData.items ||
                        this.state.cartData.items.length <= 0
                          ? "button___disable"
                          : null
                      }`}
                    >
                      Member Checkout
                    </button>
                    <button
                      className={`paypal__button ${
                        !this.state.cartData.items ||
                        this.state.cartData.items.length <= 0
                          ? "button___disable"
                          : null
                      }`}
                    >
                      <img
                        alt="PayPal"
                        width="51"
                        height="14"
                        src="https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png"
                        className="paypal__img"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col col-md-12 details">
                <div className="row details__div">
                  <div className="col col-md-12">
                    <h4 className="fav">Favourites</h4>
                  </div>
                  <div className="col col-md-12">
                    <p className="para__div">
                      Want to view your favourites?{" "}
                      <a href="#" className="Join__link">
                        Join us
                      </a>{" "}
                      or{" "}
                      <a href="#" className="Join__link">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <hr />
        </div>
      </>
    );
  }
}

export default Cart;
