import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { FormattedNumber, IntlProvider } from 'react-intl';
import useBasket from '@/hooks/useBasket';
import { v4 as uuidv4 } from 'uuid';

const CheckoutProduct = ({
	id,
	title,
	price,
	rating,
	description,
	category,
	image,
	hasPrime,
	instanceId,
}) => {
	const { addItemToBasket, removeItemFromBasket } = useBasket();

	const handleAddToBasket = () => {
		const product = {
			id,
			title,
			price,
			rating,
			description,
			category,
			image,
			hasPrime,
			instanceId: uuidv4(),
		};

		addItemToBasket(product);
	};

	const handleRemoveFromBasket = () => {
		const product = {
			id,
			instanceId,
		};
		removeItemFromBasket(product);
	};

	return (
		<section className='grid grid-cols-5'>
			<div className='h-48 w-full flex items-center justify-center'>
				<Image
					src={image}
					alt='Product image'
					height={200}
					width={200}
					className='object-contain h-full w-auto'
				/>
			</div>

			{/* Middle Section */}
			<div className='col-span-3 m-5'>
				<h4>{title}</h4>
				<div className='flex'>
					{Array.from({ length: rating }, (_, i) => (
						<StarIcon key={`${id}-${i}`} className='h-5 text-yellow-500' />
					))}
				</div>
				<p className='text-xs my-2 line-clamp-3'>{description}</p>
				<IntlProvider locale='it' defaultLocale='it'>
					<FormattedNumber value={price} style='currency' currency='EUR' />
				</IntlProvider>

				{hasPrime && (
					<div className='flex items-center space-x-2'>
						<Image
							src='/images/amazon_prime_icon.png'
							alt='Prime logo'
							width={50}
							height={20}
							loading='lazy'
							className='w-12'
						/>
						<p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
					</div>
				)}
			</div>

			{/* Right add/remove buttons */}
			<div className='flex flex-col space-y-2 my-auto justify-self-end'>
				<button onClick={handleAddToBasket} className='button'>
					Add to Basket
				</button>
				<button onClick={handleRemoveFromBasket} className='button'>
					Remove from Basket
				</button>
			</div>
		</section>
	);
};

export default CheckoutProduct;
