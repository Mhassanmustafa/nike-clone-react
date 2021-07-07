import React, { Component } from "react";
import "./css/ProductDetails.css";
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: "",
      isSizeSelected: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddToCart = () => {
    // localStorage.clear();
    if (this.state.selectedSize.length > 0) {
      let oldCart = JSON.parse(localStorage.getItem("cart"));
      let data = this.props.data;
      data["selectedSize"] = this.state.selectedSize;
      data["productId"] = Math.random().toString(36).substring(7);
      data["quantity"] = 1;
      data["totalPrice"] =
        data.quantity * parseInt(data.price.slice(1, data.price.length));
      if (oldCart) {
        let cartList = oldCart.items;
        cartList.push(data);
        localStorage.setItem("cart", JSON.stringify({ items: cartList }));
        this.props.history.push("/cart");
      } else {
        let items = [];
        items.push(data);
        localStorage.setItem("cart", JSON.stringify({ items: items }));
        this.props.history.push("/cart");
      }
    } else {
      this.setState({ isSizeSelected: false });
    }
  };

  handleChange = (size) => {
    this.setState({ selectedSize: String(size) });
    if (!this.state.isSizeSelected) {
      this.setState({ isSizeSelected: true });
    }
  };
  render() {
    return (
      <>
        <div className="container-fluid product__div">
          <div className="row">
            <div className="col col-md-9">
              {this.props.data.showCaseImages &&
              this.props.data.showCaseImages.length > 0
                ? this.props.data.showCaseImages.map((data, key) => {
                    return (
                      <div
                        className="row"
                        style={key >= 1 ? { marginTop: "-106px" } : null}
                      >
                        <div className="col col-md-6 image__div__product">
                          {data.highlyRated ? (
                            <div className="top__rated__button">
                              <svg
                                height="20px"
                                width="20px"
                                fill="#111"
                                viewBox="0 0 25 32"
                                className="star__svg"
                              >
                                <path d="M12.48 4l-3.04 8.96-9.44.32 7.6 5.6L4.96 28l7.68-5.44 7.84 5.28-2.8-9.04 7.52-5.76-9.52-.08z"></path>
                              </svg>
                              <span class="title__span">Highly Rated</span>
                            </div>
                          ) : null}

                          <img className="img-fluid" src={data.url1} alt="" />
                        </div>
                        <div
                          className="col col-md-6 image__div__product"
                          style={{ left: "-108px", paddingRight: "59px" }}
                        >
                          <img className="img-fluid" src={data.url2} alt="" />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="col col-md-3">
              <div className="right__side">
                <div>
                  <div className="right__side__details">
                    <h2 className="headLine__right">
                      {this.props.data.description}
                    </h2>
                    <h1 className="product__name__right">
                      {this.props.data.title}
                    </h1>
                    <div className="price__div">
                      <div>{this.props.data.price}</div>
                    </div>
                    <div className="thumbNail__pic">
                      <div className="thumbNail__Wrapper">
                        {this.props.data.shapesAvailable &&
                        this.props.data.shapesAvailable.length > 0
                          ? this.props.data.shapesAvailable.map((data, key) => {
                              return (
                                <div
                                  className={`thumb ${
                                    data.soldOut ? "disable" : null
                                  }`}
                                  id={key >= 1 ? "image_margin" : null}
                                >
                                  <img
                                    className="th__img"
                                    src={data.url}
                                    alt=""
                                  />
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>

                    <div>
                      <fieldset className="size__div">
                        <legend className="size__text">
                          <div className="text-5 size__text__div">
                            <span
                              className="size_select"
                              style={
                                this.state.isSizeSelected
                                  ? null
                                  : { color: "red" }
                              }
                            >
                              Select Size
                            </span>
                            <a href="#" className="size-guide">
                              Size Guide
                            </a>
                          </div>
                        </legend>
                        <div>
                          <div
                            className="sizes"
                            style={
                              this.state.isSizeSelected
                                ? null
                                : {
                                    border: "1px solid red",
                                    padding: "3px",
                                    borderRadius: "4px",
                                  }
                            }
                          >
                            {this.props.data.sizes &&
                            this.props.data.sizes.length
                              ? this.props.data.sizes.map((data, key) => {
                                  return (
                                    <div
                                      key={key}
                                      onClick={() =>
                                        this.handleChange(data.value)
                                      }
                                    >
                                      <input
                                        type="radio"
                                        className="hidden-visualy"
                                        value={data.value}
                                        key={key}
                                        name="selectedSize"
                                      />
                                      <label
                                        htmlFor="selectedSize"
                                        className="radio-label"
                                        style={
                                          this.state.selectedSize ===
                                          String(data.value)
                                            ? {
                                                marginBottom: ".44rem",

                                                border: "1px solid black",
                                              }
                                            : { marginBottom: ".44rem" }
                                        }
                                      >
                                        {data.title}
                                      </label>
                                    </div>
                                  );
                                })
                              : null}
                          </div>
                        </div>
                      </fieldset>
                      {this.state.isSizeSelected ? null : (
                        <div role="alert" class="text-color-error">
                          Please select a size.
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="bag__button__div">
                        <button
                          className="add__bag__button"
                          id="bag"
                          //   data-toggle="modal"
                          //   data-target="#exampleModal"
                          onClick={() => this.handleAddToCart()}
                        >
                          <span>Add to Bag</span>
                        </button>
                        <button className="add__bag__button" id="fav">
                          <span id="fav__span">Favourite</span>{" "}
                          <span className="heart"></span>
                        </button>
                      </div>
                    </div>

                    <span>
                      <div className="product-details">
                        <div className="descripion-body">
                          <p className="desc__para">
                            {this.props.data.details}
                          </p>
                          <ul className="description-list">
                            {this.props.data.detailList &&
                            this.props.data.detailList.length > 0
                              ? this.props.data.detailList.map((data, key) => {
                                  return (
                                    <li className="list-item">{data.detail}</li>
                                  );
                                })
                              : null}
                          </ul>
                        </div>
                        <button className="more-details">
                          <span>View Product Details</span>
                        </button>
                      </div>
                    </span>

                    <div className="product__drop__down">
                      <div className="drop__sub__div">
                        <details className="del_detail">
                          <summary className="summary__div">
                            <h3 className="summary__h3">
                              Free Delivery and Returns
                            </h3>
                          </summary>
                          <div className="details">
                            <div className="main-para">
                              <p>{this.props.data.deliveryMsg}</p>
                              <ul className="deliver__list">
                                {this.props.data.deliveryList &&
                                this.props.data.deliveryList.length > 0
                                  ? this.props.data.deliveryList.map((data) => {
                                      return (
                                        <li className="li">{data.desc}</li>
                                      );
                                    })
                                  : null}
                              </ul>
                            </div>
                          </div>
                        </details>
                        <details className="del_detail">
                          <summary className="summary__div">
                            <h3 className="summary__h3">
                              Reviews ({this.props.data.noOfReviews})
                            </h3>
                          </summary>
                          <div className="details">
                            <div className="main-para"></div>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.props.data.bottomDiv && this.props.data.bottomDiv.length > 0
          ? this.props.data.bottomDiv.map((data, key) => {
              return (
                <>
                  <div
                    className={`container-fluid ${
                      key >= 1 ? "text__div__under__image" : null
                    }`}
                  >
                    <div className="col col-md-12">
                      <div className={`${key >= 1 ? "original" : "explore"} `}>
                        <p style={key >= 1 ? { fontSize: "20px" } : null}>
                          {data.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid ">
                    <div className="col col-md-12">
                      <div className="product__Picture__details">
                        <img
                          className="nike__image"
                          src={data.imageUrl}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </>
    );
  }
}

export default ProductDetails;
