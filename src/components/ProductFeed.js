import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductFeed = ({ products }) => {
	return (
		<section className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
		</section>
	);
};

export default ProductFeed;
