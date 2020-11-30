import itemListReducer from "../../reducers/item-list-reducer";

describe("itemListReducer", () => {
  let action;
  const itemData = {
    name: "Biscuit",
    description: "it fast",
    quantity: 30,
    id: 1,
  };
  test("Should successfully add new ticket data to masterItemList", () => {
    const { name, description, quantity, id } = itemData;
    action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      quantity: quantity,
      id: id,
    };
    expect(itemListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        description: description,
        quantity: quantity,
        id: id,
      },
    });
  });
});
