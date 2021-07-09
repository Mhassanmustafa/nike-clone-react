import React, { Component } from "react";

import "./css/BottomList.css";

class BottomList extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, key: "", isOpen: false };
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

  handleSelect = (key) => {
    this.setState({ key: key, isOpen: true });
    if (this.state.key === key) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };
  value = 0;
  render() {
    if (this.state.width <= 450) {
      return (
        <div className="mobile__bottom__list">
          {this.props.list && this.props.list.length > 0
            ? this.props.list.map((opt, key) => {
                return (
                  <div className="mobile__bottom__list__container">
                    <input
                      type="checkBox"
                      id="toggle0"
                      readOnly
                      value="0"
                      className="bottom__list__checkBox"
                    />
                    <h4
                      className="title__list"
                      onClick={() => this.handleSelect(key)}
                    >
                      <label
                        role="button"
                        htmlFor="toggle0"
                        aria-expanded="true"
                        tabIndex={0}
                      >
                        {opt.heading}
                      </label>
                    </h4>

                    <div
                      className="list__div"
                      aria-hidden="false"
                      style={
                        this.state.key === key && this.state.isOpen
                          ? { maxHeight: "276px" }
                          : null
                      }
                    >
                      <ul className="bottom__option__list">
                        {opt.options && opt.options.length > 0
                          ? opt.options.map((val, key) => {
                              return (
                                <li className="list__option__value">
                                  <a
                                    href="#"
                                    className="list__link"
                                    role="listitem"
                                    tabIndex={-1}
                                  >
                                    {val.title}
                                  </a>
                                </li>
                              );
                            })
                          : null}
                      </ul>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      );
    } else {
      return (
        <div className="bottomList">
          <div className="bottomList__container">
            <div className="bottomList__menu">
              {this.props.list && this.props.list.length > 0
                ? this.props.list.map((item) => {
                    return (
                      <ul className="bottomList__column">
                        <li className="bottomList__title">{item.heading}</li>

                        {item.options && item.options.length > 0
                          ? item.options.length > 4
                            ? item.options.slice(0, 4).map((option) => {
                                return (
                                  <li className="bottomList__text">
                                    {option.title}
                                  </li>
                                );
                              })
                            : item.options.map((option) => {
                                return (
                                  <li className="bottomList__text">
                                    {option.title}
                                  </li>
                                );
                              })
                          : null}
                        {item.options && item.options.length > 4 ? (
                          <div className="bottomList__disappear">
                            {item.options
                              .slice(4, item.options.length)
                              .map((opt, key) => {
                                return (
                                  <li className="bottomList__text">
                                    {opt.title}
                                  </li>
                                );
                              })}
                          </div>
                        ) : null}
                      </ul>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BottomList;
