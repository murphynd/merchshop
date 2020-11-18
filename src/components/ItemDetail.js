import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <h3>{item.name} - Stock: {item.quantity}</h3>
      <p><em>{item.description}</em></p>
      <button onClick={props.onClickingEdit}>Update Item</button>
      <button onClick={() => onClickingDelete(item.id)}>Close Item</button>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;