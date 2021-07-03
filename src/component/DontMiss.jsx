import React, { Component } from "react";
import "./css/DontMiss.css";
class DontMiss extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{ backgroundColor: "white", marginTop: "-6px" }}
        >
          <div className="container title__container">
            <h4>{this.props.data.heading}</h4>
          </div>
        </div>
        <section id="main-banner" className="banner">
          <div className="banner__container">
            <div className="banner__item">
              <div className="banner__wrapper">
                <img
                  data-qa="image-media-img"
                  alt="Nike. Just Do It"
                  src={this.props.data.url}
                />
                <div className="figure__caption">
                  <p className="figure_caption__title">
                    {this.props.data.title}
                  </p>
                  <p className="figure__caption__summary" id="video_text">
                    {this.props.data.description} <br />
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
