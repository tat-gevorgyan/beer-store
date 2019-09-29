import { createReducer } from 'utils/reduxHelpers';
import { saveToStore, getFromStore } from 'utils/storeHelpers';

const cartItemsStoreKey = 'cartItems';

const ON_SEARCH = 'ON_SEARCH';
const ON_UPDATE_CART = 'ON_UPDATE_CART';
const ON_SELECT_PRODUCT = 'ON_SELECT_PRODUCT';

const onSearch = payload => ({ type: ON_SEARCH, payload });
const onUpdateCart = payload => ({ type: ON_UPDATE_CART, payload });
const onSelectProduct = payload => ({ type: ON_SELECT_PRODUCT, payload });

const searchHandlers = {
  [ON_SEARCH]: (state, action) => action.payload,
};

const cartHandlers = {
  [ON_UPDATE_CART]: (state, action) => action.payload,
}

const productHandlers = {
  [ON_SELECT_PRODUCT]: (state, action) => action.payload,
}

export const init = () => dispatch => {
  dispatch(onUpdateCart(getCartFromStore()))
}

export const search = token => dispatch => {
  dispatch(onSearch(token));
};

export const updateCart = products => dispatch => {
  dispatch(onUpdateCart(products));
  saveToStore(cartItemsStoreKey, JSON.stringify(products));
}

export const getCartFromStore = () => {
  return JSON.parse(getFromStore(cartItemsStoreKey)) || [];
}

export const selectProduct = product => dispatch => {
  dispatch(onSelectProduct(product));
}

export const searchState = "";
export const cartState = [];
export const productState = null;

export const searchReducer = createReducer(searchState, searchHandlers);
export const cartReducer = createReducer(cartState, cartHandlers);
export const productReducer = createReducer(productState, productHandlers);
