import React from 'react';
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { v4 } from 'uuid';

function CartList(props) {
  props.itemList.map((item) => {

  })
  return (
    <React.Fragment>
      <h1>Your cart</h1>
      <hr />
      <ul>
        {props.itemList.map((item) =>
          <CartItem
            whenCancelClicked={props.onClickingCancelOrder}
            name={item.name}
            description={item.description}
            quantity={1}
            id={item.id}
            key={v4()} />
        )}
      </ul>

    </React.Fragment>
  );
}

CartList.propTypes = {
  itemList: PropTypes.array
};

export default CartList;