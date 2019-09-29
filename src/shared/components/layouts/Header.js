import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router"
import { MDBIcon } from 'mdbreact';

import { search } from 'app/Main/actions/index';

import logo from 'assets/images/logo.png';
import background from 'assets/images/bg.jpg';

const Header = ({ location, search, token, cart, product }) => {
  const handleChange = ({ target }) => {
    search(target.value);
  };

  const isInHomePage = () => {
    return location.pathname === '/home';
  }

  const headerTitle = {
    '/home': {
      pre: 'A very warm welcome to our',
      title: 'B E E R  S H O P'
    },
    '/cart': {
      pre: 'Review your',
      title: 'B E E R  C A R T'
    },
    '/product': {
      pre: '',
      title: ''
    }
  };
  
  const getTitle = () => {
    let path = location.pathname;

    if (path.includes('product')) {
      path = '/product';
      headerTitle[path].pre = product && product.first_brewed;
      headerTitle[path].title = product && product.name
        .split(' ').map(word => word.split('').join(' ')).join('  ').toUpperCase();
    }

    if (!headerTitle[path]) {
      path = '/home';
    }
    return headerTitle[path];
  }

  return (
    <header>
      <div style={{ backgroundImage: `url(${background})`}} className="header-container">
        <div className="opacity">
          <div className='toolbar'>
            <div className="container d-flex h-100">
              <div className="row justify-content-center align-self-center content">
                <Link to="/cart">
                  <MDBIcon icon="shopping-cart" className="shopping-cart" /> 
                  <span className="cart-items-count">
                    {cart.length ? `${cart.length} item${cart.length === 1 ? '' : 's'}` : 'Empty'}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center px-5 header-context content'>
            <div className="container d-flex h-100">
              <div className="row justify-content-center align-self-center title">
                <div>
                  <Link to="/home">
                    <img className="logo" src={logo} alt="logo" width="60"/>
                  </Link>
                  <div className="title-container">
                    <p className="title-pre">{getTitle().pre}</p>
                    <h4 className="title-header">
                      <pre>{getTitle().title}</pre>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isInHomePage() && (
            <div className="d-flex search-bar">
              <div className="row justify-content-center align-self-center search-container">
                <form className="form-inline">
                  <input
                    className="form-control search-box"
                    type="text" placeholder="Search"
                    aria-label="Search"
                    value={token} 
                    onChange={handleChange} 
                  />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ token, cart, product }) => ({
  token,
  cart,
  product
});

export default connect(
  mapStateToProps,
  { search },
)(withRouter(Header));
