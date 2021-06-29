import React, { Component } from "react";
import ConverseSvg from "./svgs/ConverseSvg";
import JordanSvg from "./svgs/JordanSvg";
import "./css/Header.css";

class NikeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDownOpen: false };
  }

  render() {
    return (
      <>
        <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
          <div id="header__bar">
            <ul className="pre-brand-menu">
              <li className="pre-brand-item">
                <a
                  aria-label="Jordan"
                  data-type="click_navBrandBar"
                  data-path="Jordan"
                  className="pre-brand-item d-sm-ib prl3-sm"
                  href="https://www.nike.com/jordan"
                  data-pre="ILink"
                  id="Jordan"
                >
                  <JordanSvg />
                </a>
              </li>
              <li className="pre-brand-item">
                <a
                  aria-label="Converse"
                  data-type="click_navBrandBar"
                  data-path="Converse"
                  className="pre-brand-item d-sm-ib prl3-sm"
                  href="https://www.nike.com/w/converse-shoes-akmjxzy7ok"
                  data-pre="ILink"
                >
                  <ConverseSvg />
                </a>
              </li>
            </ul>
            {/* <div id="list-right">
              <a>Help</a>
              <span className="ml1-sm mr1-sm body-3">|</span>
              <a>Join Us</a>
              <span className="ml1-sm mr1-sm body-3">|</span>
              <a>Sign In</a>
            </div> */}
            <div className="header__nav">
              <span className="header__option" id="help">
                <p
                  className="header__List"
                  onMouseEnter={() => this.setState({ dropDownOpen: true })}
                  onMouseLeave={() => {
                    this.setState({ dropDownOpen: false });
                  }}
                >
                  Help
                </p>
                <ul
                  className={
                    this.state.dropDownOpen
                      ? "header__help-nav header__help-nav--open"
                      : "header__help-nav header__help-nav--close"
                  }
                >
                  <li className="header__title">Help</li>
                  <li className="header__text">Order Status</li>
                  <li className="header__text">Shipping & Delivery</li>
                  <li className="header__text">Returns</li>
                  <li className="header__text">Contact Us</li>
                  <li className="header__text">Privacy Policy</li>
                  <li className="header__text">Terms of Use</li>
                  <li className="header__text">Send Us Feedback</li>
                </ul>
              </span>
              <span className="headerBorder">|</span>
              <span className="header__option" id="joinUs">
                <p className="header__List">Join Us</p>
              </span>
              <span className="headerBorder">|</span>
              <span className="header__option ">
                <p className="header__List">Sign In</p>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NikeHeader;
