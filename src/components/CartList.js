import React from 'react';
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { v4 } from 'uuid';

function CartList(props) {
  return (
    <React.Fragment>
      <div className="card">
        <h1>Your cart</h1>
        <hr />
        <ul>
          {props.itemList.map((x) =>
            <CartItem
              whenCancelClicked={props.onClickingCancelOrder}
              name={x.name}
              description={x.description}
              quantity={x.quantity}
              id={x.id}
              key={v4()} />
          )}
        </ul>
      </div>
    </React.Fragment>
  );
}

CartList.propTypes = {
  itemList: PropTypes.array
};

export default CartList;