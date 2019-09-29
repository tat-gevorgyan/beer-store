import React, { useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller'

import { getProducts } from './actions';

import Loading from 'shared/components/layouts/Loading';
import Product from './components/Product';

const Dashboard = ({ token }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = async page => {
    let productList = await getProducts(page);
    setProducts(products.concat(productList));
  }

  const getFilteredProducts = () => {
    const productList = products
      .filter(product => 
        product.name.toLowerCase()
          .includes(token.trim().toLowerCase()));
    return productList
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadProducts}
      hasMore={token === ""}
      threshold={9}
      loader={<Loading key={0} />}>
        <div className='products'>
          <div className="container-fluid">
            <div className="row">
              {getFilteredProducts().map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
    </InfiniteScroll>
  );
};

const mapStateToProps = ({ token }) => ({
  token,
});

export default connect(
  mapStateToProps,
)(Dashboard);
