import React, { Component } from "react";
// import Image from "./Images/nike-just-do-it.jpg";
import "./css/HomeImage.css";

class HomeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section id="main-banner " className="container-fluid banner">
          <div className="banner__container">
            <div className="banner__item">
              <div className="banner__wrapper">
                <img
                  className="img-fluid"
                  id="banner__Image"
                  src={this.props.data.imageUrl}
                />

                <figcaption>
                  <div className="figure__Caption">
                    <p className="headline-5 text-color-primary-dark">
                      {this.props.data.headline}
                    </p>
                    <p className="display-2 text-color-primary-dark">
                      {this.props.data.title}
                    </p>
                    <div className="hasText">
                      <a href="#" className="caption__button">
                        {this.props.data.b1Text}
                      </a>
                      <a href="#" className="caption__button">
                        {this.props.data.b2Text}
                      </a>
                    </div>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>
        </section>
        {/* <div>
          <div className="container">
            
          </div>
        </div> */}
      </>
    );
  }
}

export default HomeImage;
