import React, { Component } from "react";

import "./css/BottomList.css";

class BottomList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  value = 0;
  render() {
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

export default BottomList;
