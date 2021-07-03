import React, { Component } from "react";
import "./css/FeelTheBeat.css";

class FeelTheBeat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container-fluid" style={{ backgroundColor: "white" }}>
          <div className="container title__container">
            <h4>{this.props.data.title}</h4>
          </div>
        </div>

        <div
          className="container-fluid  banner__container"
          id="main___banner__container"
        >
          <section id="" className="">
            <div className="banner__item">
              <div className="banner__wrapper">
                <div className="row">
                  <div
                    className="col col-md-6 col-12"
                    style={{ marginBottom: "20px" }}
                  >
                    <img
                      className="beat__image"
                      data-qa="image-media-img"
                      alt="Nike. Just Do It"
                      style={{ marginLeft: "2px" }}
                      src={this.props.data.leftImageUrl}
                    />
                    <div className="fig__cap__text__div">
                      <p style={{ color: "#111" }} id="video_text">
                        {this.props.data.leftTitle}
                      </p>
                      <div>
                        <a
                          href="https://www.nike.com/joinus"
                          className="btn btn-primary fig__button"
                        >
                          Shop
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-12">
                    <img
                      className="beat__image"
                      style={{ marginLeft: "-8px" }}
                      data-qa="image-media-img"
                      alt="Nike. Just Do It"
                      src={this.props.data.rightImageUrl}
                    />

                    <div
                      className="fig__cap__text__div"
                      style={{ bottom: "67.8px", left: "44px" }}
                    >
                      <p style={{ color: "#111" }} id="video_text">
                        {this.props.data.rightTitle}
                      </p>
                      <div>
                        <a
                          href="https://www.nike.com/joinus"
                          className="btn btn-primary fig__button"
                          style={{ right: "46px" }}
                        >
                          Shop
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

export default FeelTheBeat;
