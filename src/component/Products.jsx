import React, { Component } from "react";
import "./css/Product.css";
import Item from "./Item";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

class Product extends Component {
  constructor(props) {
    super(props);
    this.container_input = React.createRef();
  }

  handleScroll = (direction) => {
    this.container_input.current.scrollBy({
      left: direction,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div className="carousel">
        <p className="carousel__title">{this.props.data.title}</p>
        <div className="carousel__container" ref={this.container_input}>
          {this.props.data.products && this.props.data.products.length > 0
            ? this.props.data.products.map((value, i) => {
                if (this.props.data.products.length === i + 1) {
                  return <Item data={value} flag={true} margin="6.7%" />;
                } else {
                  return <Item data={value} flag={i >= 1 ? true : false} />;
                }
              })
            : null}

          {this.props.data.products && this.props.data.products.length > 3 ? (
            <>
              <div
                className="carousel__button_container"
                onClick={() => this.handleScroll(-419)}
              >
                <ArrowBackIosIcon
                  className="carousel__button"
                  style={{
                    fontSize: 38,
                    position: "absolute",
                    left: "5.5rem",
                    top: "-18.8rem",
                  }}
                />
              </div>
              <div
                className="carousel__button_container carousel__button_container--right"
                onClick={() => this.handleScroll(419)}
              >
                <ArrowForwardIosIcon
                  className="carousel__button"
                  style={{
                    fontSize: 38,
                    position: "absolute",
                    right: "5.5rem",
                    top: "-18.8rem",
                  }}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Product;
