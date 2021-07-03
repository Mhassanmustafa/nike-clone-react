import React from "react";
import "./css/Item.css";

function Item(props) {
  return (
    <div className="item" style={props.margin ? { marginRight: "6.6%" } : null}>
      <img className="item__image" src={props.data.url}></img>
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
