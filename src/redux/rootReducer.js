import { combineReducers } from 'redux';
import { searchReducer, cartReducer, productReducer } from 'app/Main/actions';

const rootReducer = combineReducers({
    token: searchReducer,
    cart: cartReducer,
    product: productReducer
});

export default rootReducer;
