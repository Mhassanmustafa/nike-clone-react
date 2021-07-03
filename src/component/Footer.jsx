import "./css/Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bottomMenu">
        <div className="bottomMenu__container-top">
          <div className="bottomMenu__navBar">
            {this.props.data.sideHeadings &&
            this.props.data.sideHeadings.length > 0 ? (
              <ul className="bottomMenu__column bottomMenu__title">
                {this.props.data.sideHeadings.map((opt) => {
                  return <li>{opt.title}</li>;
                })}
              </ul>
            ) : null}

            {this.props.data.links && this.props.data.links.length > 0 ? (
              <>
                {this.props.data.links.map((opt) => {
                  return (
                    <ul className="bottomMenu__column">
                      {opt.options.map((data) => {
                        return (
                          <li
                            className={
                              data.heading ? "bottomMenu__title" : null
                            }
                          >
                            {data.title}
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </>
            ) : null}
          </div>

          <div className="bottomMenu__social-apps">
            <TwitterIcon className="bottomMenu__app svg" />
            <FacebookIcon className="bottomMenu__app svg" />
            <YouTubeIcon className="bottomMenu__app svg" />
            <InstagramIcon className="bottomMenu__app svg" />
          </div>
        </div>
        <div className="bottomMenu__container-bottom">
          <div className="bottomMenu__location">
            <div className="bottomMenu__text-location">
              <LocationOnIcon style={{ position: "relative", top: "-9px" }} />
              <p>{this.props.data.location}</p>
            </div>

            <p className="bottomMenu__text">{this.props.data.rights}</p>
          </div>
          {this.props.data.conditions &&
          this.props.data.conditions.length > 0 ? (
            <ul className="bottomMenu__navBar-bottom">
              {this.props.data.conditions.map((opt) => {
                return <li>{opt.title}</li>;
              })}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Footer;
