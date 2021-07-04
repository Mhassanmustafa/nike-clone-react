import React, { Component } from "react";
import "./css/ProductDetails.css";
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container-fluid product__div">
          <div className="row">
            <div className="col col-md-9">
              <div className="row">
                <div className="col col-md-6 image__div__product">
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
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9f42ff34-736a-41a3-aaec-41282f27f292/blazer-low-77-shoe-S3k4n9.png"
                    alt=""
                  />
                </div>
                <div
                  className="col col-md-6 image__div__product"
                  style={{ left: "-108px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/53183e47-37c0-4039-bc01-4c35b6c00447/blazer-low-77-shoe-S3k4n9.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="row" style={{ marginTop: "-106px" }}>
                <div className="col col-md-6 image__div__product">
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/73129ebd-dfaa-4caa-b9cd-b7a89e13a0f1/blazer-low-77-shoe-S3k4n9.png"
                    alt=""
                  />
                </div>
                <div
                  className="col col-md-6 image__div__product"
                  style={{ left: "-108px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/501d206e-7661-4c21-9431-c38c3a3cb8af/blazer-low-77-shoe-S3k4n9.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="row" style={{ marginTop: "-106px" }}>
                <div className="col col-md-6 image__div__product">
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/68de41cf-ed7e-456d-ae3b-c91e7a91cc8c/blazer-low-77-shoe-S3k4n9.png"
                    alt=""
                  />
                </div>
                <div
                  className="col col-md-6 image__div__product"
                  style={{ left: "-108px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5ef47909-8569-4fa9-a043-771d8c9469cb/blazer-low-77-shoe-S3k4n9.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="row" style={{ marginTop: "-106px" }}>
                <div className="col col-md-6 image__div__product">
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ad3edb6d-999d-464c-b80d-52b980d42ebc/blazer-low-77-shoe-S3k4n9.png"
                    alt=""
                  />
                </div>
                <div
                  className="col col-md-6 image__div__product"
                  style={{ left: "-108px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8cfa55eb-1334-42ff-9883-bbfe3fbb9783/blazer-low-77-shoe-S3k4n9.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col col-md-3">
              <div className="right__side">
                <div>
                  <div className="right__side__details">
                    <h2 className="headLine__right">Women's Shoe</h2>
                    <h1 className="product__name__right">
                      Nike Blazer Low '77
                    </h1>
                    <div className="price__div">
                      <div>$115</div>
                    </div>
                    <div className="thumbNail__pic">
                      <div className="thumbNail__Wrapper">
                        <div className="thumb">
                          <img
                            className="th__img"
                            src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/71dd1275-62fb-449e-a34a-c0c01c10688d/blazer-low-77-shoe-S3k4n9.png"
                            alt=""
                          />
                        </div>
                        <div className="thumb" id="image_margin">
                          <img
                            className="th__img"
                            src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/5804adcd-94a4-41f6-b29b-509a07e86d47/blazer-low-77-shoe-S3k4n9.png"
                            alt=""
                          />
                        </div>
                        <div className="thumb disable" id="image_margin">
                          <img
                            className="th__img"
                            src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/f2f93b0b-a9cc-4751-bbf4-784f5c33e4ad/blazer-low-77-shoe-S3k4n9.png"
                            alt=""
                          />
                        </div>
                        <div className="thumb" id="image_margin">
                          <img
                            className="th__img"
                            src="https://static.nike.com/nike-prod-cld/images/t_PDP_144_v1/f_auto/static/en_gb-DYO/DYO.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <fieldset className="size__div">
                        <legend className="size__text">
                          <div className="text-5 size__text__div">
                            <span className="size_select">Select Size</span>
                            <a href="#" className="size-guide">
                              Size Guide
                            </a>
                          </div>
                        </legend>
                        <div className="sizes">
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              className="hidden-visualy"
                              value="26127395:5"
                            />
                            <label htmlFor="" className="radio-label">
                              US 5
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div>
                      <div className="bag__button__div">
                        <button className="add__bag__button">
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
                            Praised by the streets for its classic simplicity
                            and comfort, the Nike Blazer Low '77 returns with
                            its low-profile, classic hoops style. Featuring
                            crisp leather, a retro Swoosh design and super-soft,
                            low-cut collar, it's a must-have wardrobe staple.
                          </p>
                          <ul className="description-list">
                            <li className="list-item">
                              Colour Shown: White/White/White/White
                            </li>
                            <li className="list-item">Style: DC4769-101</li>
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
                              <p>Free standard delivery on orders over $175.</p>
                              <ul className="deliver__list">
                                <li className="li">
                                  Delivery may take longer than normal. Check
                                  your estimated delivery date at checkout.
                                </li>
                                <li className="li">
                                  You can return your order for any reason, free
                                  of charge, within 60 days.
                                </li>
                              </ul>
                            </div>
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
        <div className="container-fluid">
          <div className="col col-md-12">
            <div className="explore">
              <p>Explore the Nike Blazer Low '77 Women's Shoe</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetails;
