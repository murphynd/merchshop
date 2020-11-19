import React from 'react';
import PropTypes from "prop-types";

function CartList(props) {
  return (
    <React.Fragment>
      <h1>Your cart</h1>
      <hr />
      <ul>
        {props.itemList.map((item) =>
          <li>{item.name} <button onClick={() => props.onClickingCancelOrder(item.id)}>Cancel Order</button> </li>
        )}
      </ul>

    </React.Fragment>
  );
}

CartList.propTypes = {
  itemList: PropTypes.array
};

export default CartList;