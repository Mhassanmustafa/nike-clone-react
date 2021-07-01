import React, { Component } from "react";
import "./css/NewsHeader.css";
class NewsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section
        className="news__NavBar"
        style={{
          backgroundColor: "#f5f5f5",
          height: "58px",
          boxShadow: "inset 0 -1px 0 0 #e5e5e5",
        }}
      >
        <div className="container">
          <div
            id="carouselContent"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              {this.props.news && this.props.news.length > 0
                ? this.props.news.map((value) => {
                    return (
                      <div
                        className={`carousel-item text-center ${
                          value.id === 1 ? "active" : null
                        }`}
                        style={{ paddingTop: "10px", fontSize: "smaller" }}
                      >
                        <div className aria-hidden="true">
                          <span
                            className={`${
                              value.span && value.span.length > 0
                                ? "NewsHeader__span"
                                : ""
                            }`}
                          >
                            {value.span}
                          </span>
                          <div className>
                            <p
                              className={`${
                                value.span && value.span.length > 0
                                  ? "News__Header_p--active-span"
                                  : "News__Header_p"
                              }`}
                            >
                              {value.para}

                              {value.Link && value.Link.length > 0 ? (
                                <a
                                  href={value.url ? value.url : "#"}
                                  style={{ textDecoration: "underLine" }}
                                >
                                  {value.Link}
                                </a>
                              ) : null}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsHeader;
