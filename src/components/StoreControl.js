import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      masterItemList: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      visible: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.visible) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} />;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default StoreControl;