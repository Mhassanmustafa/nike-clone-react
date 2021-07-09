import React from "react";
import "./css/Item.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function Item(props) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="item"
      style={
        props.margin
          ? windowDimensions.width <= 450
            ? props.flag
              ? { marginRight: "13.9%", marginLeft: "3.6%" }
              : { marginRight: "13.9%" }
            : { marginRight: "6.6%" }
          : null
      }
    >
      {props.data.containsData ? (
        <Link to={`/product/${props.data.id}`}>
          <img className="item__image" src={props.data.url}></img>
        </Link>
      ) : (
        <img className="item__image" src={props.data.url}></img>
      )}

      <div className="item__description">
        <p className="item__title">
          {props.data.title}
          <span className="item__price">{props.data.price}</span>
        </p>
        <p className="item__text">{props.data.description}</p>
      </div>
    </div>
  );
}

export default Item;
