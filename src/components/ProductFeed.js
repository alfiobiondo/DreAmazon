import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductFeed = ({ products }) => {
	return (
		<>
			{products.map(({ id, title, price, description, category, image }) => (
				<ProductCard
					key={id}
					id={id}
					title={title}
					price={price}
					description={description}
					category={category}
					image={image}
				/>
			))}
		</>
	);
};

export default ProductFeed;
