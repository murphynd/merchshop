import React from 'react';
import Item from './Item';
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ItemList.map((item, index) =>
        <Item names={item.names}
          location={item.location}
          issue={item.issue}
          key={index} />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;