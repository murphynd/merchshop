import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import CartList from './CartList';

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      masterItemList: [],
      selectedItem: null,
      editing: false,
      cartList: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        visible: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        visible: !prevState.visible,
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      visible: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  }

  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingItemInList = (ItemToEdit) => {
    const editedMasterItemList = this.state.masterItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(ItemToEdit);
    this.setState({
      masterItemList: editedMasterItemList,
      editing: false,
      selectedItem: null
    });
  }

  handleBuyClick = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    selectedItem.quantity -= 1;
    const newCartList = this.state.cartList.concat(selectedItem);
    this.setState({
      cartList: newCartList
    });
  }

  handleRestockClick = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    selectedItem.quantity += 1;
    this.setState({});
  }

  handleCancelOrderClick = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    selectedItem.quantity += 1;
    const index = this.state.cartList.findIndex(x => x.id === id);
    const copyCart = [...this.state.cartList];
    let newCartList;
    if (this.state.cartList.length > 1) {
      copyCart.splice(index, 1);
      newCartList = copyCart;
    } else {
      newCartList = [];
    }
    this.setState({
      cartList: newCartList
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditItemForm
          item={this.state.selectedItem}
          onEditItem={this.handleEditingItemInList} />
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState =
        <ItemDetail
          item={this.state.selectedItem}
          onClickingDelete={this.handleDeletingItem}
          onClickingEdit={this.handleEditClick}
          onClickingBuy={this.handleBuyClick}
          onClickingRestock={this.handleRestockClick} />
      buttonText = "Return to Item List";
    } else if (this.state.visible) {
      currentlyVisibleState =
        <NewItemForm
          onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState =
        <ItemList
          itemList={this.state.masterItemList}
          onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <CartList
          itemList={this.state.cartList}
          onClickingCancelOrder={this.handleCancelOrderClick} />
      </React.Fragment>
    );
  }

}

export default StoreControl;