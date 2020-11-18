// Items should have fields for name, description, and quantity
import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - Stock: {props.quantity}</h3>
      <p><em>{props.description}</em></p>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Item;