import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>{props.name} - Stock: {props.quantity > 0 ? props.quantity : 'Out of Stock'}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  names: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;