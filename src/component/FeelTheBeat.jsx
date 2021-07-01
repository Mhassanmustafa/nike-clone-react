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
            <h4>Feel The Beat</h4>
          </div>
        </div>

        <div className="banner__container" style={{ padding: "0 34px" }}>
          <section
            id="main-banner"
            className="banner"
            style={{ marginTop: "20px" }}
          >
            <div className="banner__item">
              <div className="banner__wrapper">
                <div className="row">
                  <div
                    className="col col-md-6 col-12"
                    style={{ marginBottom: "20px" }}
                  >
                    <img
                      style={{ height: "auto", width: "100%" }}
                      data-qa="image-media-img"
                      alt="Nike. Just Do It"
                      src="https://static.nike.com/a/images/f_auto/dpr_1.0/w_608,c_limit/1818ced9-dcff-4026-b672-d68a8ed0f903/nike-just-do-it.jpg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "53px",
                        fontSize: "23px",
                      }}
                    >
                      <p
                        style={{ color: "#ffffff", fontSize: "large" }}
                        id="video_text"
                      >
                        Play for the Future Collection
                      </p>
                      <div>
                        <a
                          href="https://www.nike.com/joinus"
                          className="btn btn-primary"
                          id="_button"
                        >
                          Shop
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-12">
                    <img
                      style={{ height: "auto", width: "100%" }}
                      data-qa="image-media-img"
                      alt="Nike. Just Do It"
                      src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_486,c_limit/28f44bed-a126-4dcf-9d4f-6255184d8b4c/nike-just-do-it.jpg"
                    />
                    <div id="side_picture">
                      <p style={{ color: "white", fontSize: "small" }}>
                        Sophia Smith, Forward, U.S. Women's National Team
                      </p>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "53px",
                        left: "53px",
                        fontSize: "23px",
                      }}
                    >
                      <p
                        style={{ color: "#ffffff", fontSize: "large" }}
                        id="video_text"
                      >
                        Gear Up for Soccer
                      </p>
                      <div>
                        <a
                          href="https://www.nike.com/joinus"
                          className="btn btn-primary"
                          id="_button"
                        >
                          Shop
                        </a>
                        <a
                          href="https://www.nike.com/joinus"
                          className="btn btn-primary"
                          id="_button"
                        >
                          Explore
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
