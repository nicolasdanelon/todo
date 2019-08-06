import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    quantity: PropTypes.number,
    active: PropTypes.boolean,
  })
};

const ListItem = ({ item, active, onChange }) => (
  <li className="ListItem" onChange={() => onChange(item._id)}>
    <label className="ListItem__label">
      <input className="ListItem__checkbox" type="checkbox" name={item.name} defaultChecked={active} />
      <img className="ListItem__img" src={item.picture} alt={item.name} />
      <span className="ListItem__name">{item.name}</span>
      <span className="ListItem__color" style={{ backgroundColor: item.color }}>
        {item.color}
      </span>
      <span className="ListItem__quantity">{item.quantity}</span>
    </label>
  </li>
);

ListItem.propTypes = propTypes;
export default ListItem;
