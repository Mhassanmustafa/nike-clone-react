import React, { Component } from "react";
import NikeLogo from "./svgs/NikeLogo";
import db from "../db.json";
import "./css/SearchMenu.css";
import Basket from "./svgs/Basket";
import Heart from "./svgs/Heart";
import Search from "./svgs/Search";

class SearchMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: db,
      logoHover: false,
      openSearch: false,
    };
  }
  render() {
    return (
      <header>
        <div
          className="logoContainer d-flex justify-content-center align-items-center"
          data-var="swooshLogo"
        >
          <div className="logo">
            <a
              aria-label="Nike Home Page"
              data-brand="nike"
              data-type="click_headerLogo"
              data-path="home"
              className="d-sm-b prl2-sm prl3-lg"
              href="https://www.nike.com"
              data-pre="ILink"
            >
              <NikeLogo
                fill={this.state.logoHover ? "silver" : "#111"}
                onMouseEnter={() => this.setState({ logoHover: true })}
                onMouseLeave={() => this.setState({ logoHover: false })}
              />
            </a>
          </div>
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ width: "100%" }}
          >
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              style={{ justifyContent: "center", height: "40px" }}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav" id="search__Menu">
                {this.state.data.topMenu && this.state.data.topMenu.length > 0
                  ? this.state.data.topMenu.map((value) => {
                      return (
                        <li className="nav-item" id={`list${value.id}`}>
                          <p className="nav-link">{value.name}</p>
                        </li>
                      );
                    })
                  : null}
              </ul>
              <div id="search__header__icon">
                {/* <Search className="" /> */}
                <input
                  className="menu__search-input"
                  type="text"
                  placeholder="Search"
                />

                <Heart />
                <Basket />
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default SearchMenu;
