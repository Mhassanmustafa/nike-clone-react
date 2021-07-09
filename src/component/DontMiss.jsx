import React, { Component } from "react";
import "./css/DontMiss.css";
class DontMiss extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{ backgroundColor: "white", marginTop: "-6px" }}
        >
          <div
            className="container title__container"
            style={this.state.width <= 450 ? { top: "-8.67rem" } : null}
          >
            <h4>{this.props.data.heading}</h4>
          </div>
        </div>
        <section id="main-banner" className="banner mobile__banner">
          <div className="banner__container">
            <div className="banner__item">
              <div className="banner__wrapper mobile__banner__wrapper">
                <img
                  data-qa="image-media-img"
                  alt="Nike. Just Do It"
                  className="img-fluid desktop__image"
                  src={this.props.data.url}
                />
                <img
                  className="img-fluid mobile___image"
                  src={this.props.data.mobileImageUrl}
                  alt=""
                />
                <div className="figure__caption">
                  <p className="figure_caption__title">
                    {this.props.data.title}
                  </p>
                  <p className="figure__caption__summary" id="video_text">
                    {this.props.data.description}{" "}
                    {this.state.width <= 450 ? null : <br />}
                    {this.props.data.newLine}
                  </p>
                  <div className="figure__caption__buttons__div">
                    <a
                      href="#"
                      className="btn btn-primary figure__caption__buttons"
                    >
                      {this.props.data.btn1}
                    </a>
                    <button
                      className="btn btn-primary figure__caption__buttons"
                      href="#"
                    >
                      {this.props.data.btn2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DontMiss;
