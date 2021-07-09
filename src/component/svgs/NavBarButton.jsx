import React, { Component } from "react";
class NavBarButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
          <path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z" />
        </svg>
      </>
    );
  }
}

export default NavBarButton;
