import React, { useState } from 'react';
import Image from 'next/image';

import { StarIcon } from '@heroicons/react/24/solid';

import { IntlProvider, FormattedNumber } from 'react-intl';
import useProductCard from '@/hooks/useProductCard';

const ProductCard = ({ id, title, price, description, category, image }) => {
	const { rating, hasPrime } = useProductCard();

	return (
		<article className='relative m-5 bg-white z-30 p-10'>
			<header className='flex flex-col'>
				<p className='absolute top-2 right-2 text-xs italic text-gray-400'>
					{category}
				</p>
				<Image
					src={image}
					alt='Product image'
					height={200}
					width={200}
					className='object-contain h-50 w-auto m-auto'
				/>
				<h4 className='my-3'>{title}</h4>
				<div className='flex'>
					{Array.from({ length: rating }, (_, i) => (
						<StarIcon key={i} className='h-5 text-yellow-500' />
					))}
				</div>
			</header>

			<p className='text-xs my-2 line-clamp-2'>{description}</p>

			<footer className='flex flex-col'>
				<div className='mb-5'>
					<IntlProvider locale='it' defaultLocale='it'>
						<FormattedNumber value={price} style='currency' currency='EUR' />
					</IntlProvider>
				</div>
				{hasPrime && (
					<div className='flex items-center space-x-2 -mt-5 mb-2'>
						<Image
							src='/images/amazon_prime_icon.png'
							alt='Prime logo'
							width={50}
							height={20}
						/>
						<p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
					</div>
				)}

				<button className='mt-auto button'>Add to Basket</button>
			</footer>
		</article>
	);
};

export default ProductCard;
