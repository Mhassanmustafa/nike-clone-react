import React, { Component } from "react";
import "./css/Cart.css";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <main className="cart__main">
            <div className="row main__row full__width cart__div">
              <div className="col col-md-8 ">
                <h4 class="div__title">Bag</h4>
                <div className="row">
                  <div className="product__main__div">
                    <div className="product__sub__div">
                      <figure className="product__Thumbnail">
                        <img
                          className="product__image"
                          src="https://images.nike.com/is/image/DotCom/CZ1055_118_A_PREM?align=0,1&amp;cropN=0,0,0,0&amp;resMode=sharp&amp;bgc=f5f5f5&amp;wid=150&amp;fmt=jpg"
                          alt="Nike Blazer Mid '77 Vintage"
                        />
                      </figure>

                      <div className="product__detail">
                        <div className="row">
                          <div className="col col-md-8">
                            <a href="#">
                              <p className="product__name">
                                Nike Blazer Mid '77 Vintage
                              </p>
                            </a>
                            <div className="shoes__description">
                              Women's Shoe
                            </div>
                            <div className="shoes__description">
                              White/Black/Summit White/Pink Oxford
                            </div>
                            <div className="drop__down__div">
                              <div className="first__cell">
                                <label htmlFor="#" className="dropdown__label">
                                  Size
                                </label>
                                <div className="drop__down--icon"></div>
                                <select className="drop__down__select">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </div>
                              <div className="first__cell">
                                <label htmlFor="#" className="dropdown__label">
                                  Quantity
                                </label>
                                <div className="drop__down--icon"></div>
                                <select className="drop__down__select">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col col-md-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md-4 " id="summary__description">
                <h4 class="div__title">Summary</h4>
                <div className="row">
                  <div className="col col-md-9">
                    <p className="summary__left">Subtotal</p>
                  </div>
                  <div className="col col-md-3">
                    <p className="summary__right">$135.00</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-md-9">
                    <p className="summary__left estimate_left">
                      Estimated Delivery & Handling
                    </p>
                  </div>
                  <div className="col col-md-3">
                    <p className="summary__right estimate_right">$10.95</p>
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
                    <p className="total__right">$145.95</p>
                  </div>
                </div>
                <hr className="summary__hr" style={{ marginTop: "11px" }} />
                <div className="row button__div">
                  <div className="col col-md-12 button__row">
                    <button className="checkOut__buttons">
                      Guest Checkout
                    </button>
                    <button className="checkOut__buttons">
                      Member Checkout
                    </button>
                    <button className="paypal__button">
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
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Cart;