import React from 'react';

const ProductFeed = ({ products }) => {
	return (
		<>
			{products.map((product) => (
				<p key={product.title}>{product.title}</p>
			))}
		</>
	);
};

export default ProductFeed;
