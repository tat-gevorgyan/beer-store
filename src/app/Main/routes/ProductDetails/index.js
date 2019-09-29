import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loading from 'shared/components/layouts/Loading';
import { getProduct } from './actions';
import { addToCart } from '../Cart/actions/index';
import { selectProduct } from '../../actions/index';

const ProductDetails = ({ match, addToCart, cart, selectProduct, product }) => {
	useEffect(() => {
		selectProduct(null);
		getProductById();
		// eslint-disable-next-line
	}, [])

	const getProductById = async () => {
		const id = match.params.id;
		const product = await getProduct(id);
		selectProduct(product);
	}

	const getCountInCart = () => {
		const cartItem = cart.find(item => item.id === product.id);
		return cartItem ? cartItem.count : 0;
	}

	return product ? (
		<div className="row app-content">	
			<div className="col-4">
				<img src={product.image_url} alt={product.tagline} />
			</div>
			<div className="col-6">
				<h4><strong>{product.name}</strong></h4>
				<p>{product.description}</p>
				<h4>${product.ebc}</h4>
				<span className="items-count">{getCountInCart()}</span>
				<button 
					type="button" 
					className="btn btn-primary btn-lg button" 
					onClick={() => addToCart(product)}>
						ADD TO CART
				</button>
			</div>
			<div className="col-2"></div>
		</div>
	) : <Loading />
}

const mapStateToProps = ({ cart, product }) => ({
	cart,
	product
 });
  
export default connect(
	mapStateToProps,
	{ addToCart, selectProduct },
)(ProductDetails);
