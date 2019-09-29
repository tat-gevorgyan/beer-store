import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<div className="col-4 text-center product">
			<Link to={`/product/${product.id}`}>
				<img
					className="product-img" 
					src={product.image_url} 
					alt={product.tagline} 
				/>
				<div className="product-info">
					<span className="product-name">{product.name}</span><br />
					<span className="product-price">${product.ebc}</span>
				</div>
		  	</Link>
		</div>
	);
};

export default Product;
