import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { IntlProvider, FormattedNumber } from 'react-intl';
import useProductCard from '@/hooks/useProductCard';

const ProductCard = ({ id, title, price, description, category, image }) => {
	const { rating, hasPrime } = useProductCard();

	return (
		<article className='relative m-5 bg-white z-30 p-10 flex flex-col'>
			{/* Header: Product image, category, title, rating */}
			<header className='flex flex-col'>
				<p className='absolute top-2 right-2 text-xs italic text-gray-400'>
					{category}
				</p>

				{/* Image */}
				<div className='h-48 w-full flex items-center justify-center'>
					<Image
						src={image}
						alt='Product image'
						height={200}
						width={200}
						className='object-contain h-full w-auto'
					/>
				</div>

				{/* Title */}
				<h4 className='mt-3 mb-1'>{title}</h4>

				{/* Rating */}
				<div className='flex'>
					{Array.from({ length: rating }, (_, i) => (
						<StarIcon key={i} className='h-5 text-yellow-500' />
					))}
				</div>
			</header>

			{/* Main: Description and price */}
			<main className='mt-2'>
				<p className='text-xs my-2 line-clamp-2'>{description}</p>
				<IntlProvider locale='it' defaultLocale='it'>
					<FormattedNumber value={price} style='currency' currency='EUR' />
				</IntlProvider>
			</main>

			{/* Footer: Prime logo and button */}
			<footer className='mt-auto'>
				{/* Prime Badge */}
				<div className='flex items-center space-x-2 mb-2'>
					{hasPrime ? (
						<>
							<Image
								src='/images/amazon_prime_icon.png'
								alt='Prime logo'
								width={50}
								height={20}
							/>
							<p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
						</>
					) : (
						<div className='w-[50px] h-[20px]' />
					)}
				</div>

				{/* Add to Basket Button */}
				<button className='button w-full'>Add to Basket</button>
			</footer>
		</article>
	);
};

export default ProductCard;
