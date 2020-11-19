import React from "react";
import PropTypes from "prop-types";

function CartItem(props) {
  return (
    <React.Fragment>
      <h4>{props.name} - x{props.quantity > 0 ? props.quantity : 'Out of Stock'}
        <button onClick={() => props.whenCancelClicked(props.id)}>Cancel Order</button></h4>
      <hr />
    </React.Fragment>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCancelClicked: PropTypes.func
};

export default CartItem;