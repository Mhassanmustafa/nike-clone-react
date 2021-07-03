import React, { Component } from "react";
import "./css/MoreNike.css";
class MoreNike extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div
          className="container-fluid top__div"
          style={{ marginTop: "-66px" }}
        >
          <div className="container title__container">
            <h4>{this.props.data.heading}</h4>
          </div>
        </div>

        <div
          className="container-fluid  banner__container"
          id="main___banner__container"
        >
          <section id="" className="">
            <div className="banner__item">
              <div className="banner__wrapper">
                <div className="row div__width">
                  <div
                    className="col col-md-3 col-12"
                    style={{ marginBottom: "20px" }}
                  >
                    <img
                      className="beat__image"
                      data-qa="image-media-img"
                      alt="Nike. Just Do It"
                      // style={{ marginLeft: "2px" }}
                      src={this.props.data.url1}
                    />
                    <div className="more__text__div">
                      <div>
                        <a
                          href="https://www.nike.com/joinus"
                          className="btn btn-primary cards__buttons"
                        >
                          {this.props.data.btn1Title}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-3 col-12">
                    <img
                      className="beat__image"
                      style={{ marginLeft: "-15px" }}
                      data-qa="image-media-img"
                      alt="Nike. Just Do It"
                      src={this.props.data.url2}
                    />

                    <div
                      className="more__text__div"
                      style={{ bottom: "71px", left: "81px" }}
                    >
                      <div>
                        <a
                          href="https://www.nike.com/joinus"
                          className="btn btn-primary cards__buttons"
                        >
                          {this.props.data.btn2Title}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-3 col-12">
                    <img
                      className="beat__image"
                      style={{ marginLeft: "-35px" }}
                      data-qa="image-media-img"
                      alt="Nike. Just Do It"
                      src={this.props.data.url3}
                    />

                    <div
                      className="more__text__div"
                      style={{ bottom: "71px", left: "81px" }}
                    >
                      <div>
                        <a
                          href="https://www.nike.com/joinus"
                          className="btn btn-primary cards__buttons"
                        >
                          {this.props.data.btn3Title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default MoreNike;
