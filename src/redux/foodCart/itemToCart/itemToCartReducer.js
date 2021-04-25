import { itemToCartConstant } from "./itemToCartConstant";

const initial_State = {
  itemDetail: undefined,
  items: [],
  error: undefined,
};

export const itemToCartReducer = (state = initial_State, action) => {
  switch (action.type) {
    case itemToCartConstant.Start:
      return {
        ...state,
      };
    case itemToCartConstant.Success:
      return {
        ...state,
        itemDetail: action.payload,
        items: addItemsToCart(state.items, action.payload),
        error: action.error,
      };
    case itemToCartConstant.Failure:
      return {
        ...state,
        itemDetail: action.payload,
        error: action.error,
      };
    case itemToCartConstant.Start_Reduce:
      return {
        ...state,
      };
    case itemToCartConstant.Success_Reduce:
      return {
        ...state,
        itemDetail: action.payload,
        items: removeItemsFromCart(state.items, action.payload),
        error: action.error,
      };
    case itemToCartConstant.Failure_Reduce:
      return {
        ...state,
        itemDetail: action.payload,
        error: action.error,
      };
    case itemToCartConstant.Empty_Cart:
      return {
        ...state,
        itemDetail: action.payload,
        error: action.error,
        items: [],
      };
    default:
      return state;
  }
};

const addItemsToCart = (items, itemtoAdd) => {
  const existingitem = items.find((item) => item.itemId === itemtoAdd.itemId);
  if (existingitem) {
    return items.map((item) =>
      item.itemId === itemtoAdd.itemId
        ? { ...item, quantity: itemtoAdd.quantity }
        : item
    );
  }
  return [...items, itemtoAdd];
};

export const removeItemsFromCart = (items, itemtoremove) => {
  const existingitem = items.find(
    (item) => item.itemId === itemtoremove.itemId
  );
  if (existingitem.quantity === 1) {
    return items.filter((item) => item.itemId !== itemtoremove.itemId);
  }
  return items.map((item) =>
    item.itemId === itemtoremove.itemId
      ? { ...item, quantity: itemtoremove.quantity }
      : item
  );
};
