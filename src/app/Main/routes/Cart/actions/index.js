import { getCartFromStore, updateCart } from "app/Main/actions";

export const addToCart = product => dispatch => {
    let cartItems = getCartFromStore();
  
    const index = cartItems.findIndex(item => item.id === product.id);
    let item = index >= 0 ? cartItems[index] : {};
  
    item = {
      ...item,
      id: product.id,
      count: item.count ? ++item.count : 1,
      name: product.name,
      price: product.ebc,
      image_url: product.image_url,
      first_brewed: product.first_brewed
    };
  
    if (index < 0) {
      cartItems = cartItems.concat(item);
    }
    
    dispatch(updateCart(cartItems));
  }
  
  export const decrementCount = product => dispatch => {
    let cartItems = getCartFromStore();
    const index = cartItems.findIndex(item => item.id === product.id);
    const item = cartItems[index];
    if (item.count === 1) {
      cartItems = cartItems.filter(item => item.id !== product.id);
    } else {
      --item.count;
    }
    dispatch(updateCart(cartItems));
  }
  
  export const incrementCount = product => dispatch => {
    let cartItems = getCartFromStore();
    const index = cartItems.findIndex(item => item.id === product.id);
    if (index >= 0) {
      const item = cartItems[index];
      ++item.count;
    }
    dispatch(updateCart(cartItems));
  }
  
  export const removeFromCart = product => dispatch => {
    const items = getCartFromStore();
    const cartItems = items.filter(item => item.id !==  product.id);
    dispatch(updateCart(cartItems));
  }

  export const clearCart = () => dispatch => {
    dispatch(updateCart([]));
  }