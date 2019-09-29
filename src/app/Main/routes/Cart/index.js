import React from 'react';
import { connect } from 'react-redux';
import { MDBIcon } from 'mdbreact';

import { 
  decrementCount, 
  incrementCount, 
  removeFromCart, 
  clearCart 
} from './actions/index';

const Cart = ({ 
  cart, 
  decrementCount, 
  incrementCount,
  removeFromCart, 
  clearCart 
}) => {
  return (
    <div className="app-content">
      {cart.length ? (
        <React.Fragment>
          <table className="table">
            <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td className="align-middle">
                  <img src={product.image_url} alt={product.tagline} />
                </td>
                <td className="align-middle">
                  <p>{product.name}</p>
                  <p className="product-title">{product.first_brewed}</p>
                </td>
                <td className="align-middle change-count-column">
                  <div className="change-count">
                    <MDBIcon 
                      icon="angle-down" 
                      onClick={() => decrementCount(product)} 
                    />
                    <span>{product.count}</span>
                    <MDBIcon
                      icon="angle-up"
                      onClick={() => incrementCount(product)} 
                    />
                  </div>
                </td>
                <td className="align-middle">
                  <button className="remove-button" onClick={() => removeFromCart(product)}>x</button>
                </td>
                <td className="align-middle">
                  ${product.price * product.count}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={clearCart}
          >
            CLEAR CART
          </button>
        </React.Fragment>
      ) : 'Cart is empty'}
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({
  cart,
})
 
export default connect(
  mapStateToProps,
  { 
    decrementCount,
    incrementCount,
    removeFromCart,
    clearCart
  }
)(Cart);