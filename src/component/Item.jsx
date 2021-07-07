import React from "react";
import "./css/Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item" style={props.margin ? { marginRight: "6.6%" } : null}>
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
