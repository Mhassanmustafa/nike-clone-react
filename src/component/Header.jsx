import React, { Component } from "react";
import ConverseSvg from "./svgs/ConverseSvg";
import JordanSvg from "./svgs/JordanSvg";

class NikeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <div id="list-right">
              <a>Help</a>
              <span className="ml1-sm mr1-sm body-3">|</span>
              <a>Join Us</a>
              <span className="ml1-sm mr1-sm body-3">|</span>
              <a>Sign In</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NikeHeader;
