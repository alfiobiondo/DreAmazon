import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { FormattedNumber, IntlProvider } from 'react-intl';
import useBasket from '@/hooks/useBasket';
import QuantitySelector from './QuantitySelector';

const CheckoutProduct = ({
	id,
	title,
	price,
	rating,
	description,
	category,
	image,
	hasPrime,
	quantity,
}) => {
	const { removeItemFromBasket, updateItemQuantity } = useBasket();

	const handleRemoveFromBasket = () => {
		const product = {
			id,
		};
		removeItemFromBasket(product);
	};

	const handleQuantityChange = (newQuantity) => {
		updateItemQuantity(id, newQuantity);
	};

	return (
		<section className='grid grid-cols-1 md:grid-cols-5 gap-4'>
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

			{/* Right Quantity and Buttons Column  */}
			<div className='flex flex-row w-full my-auto space-x-2 md:space-x-0 md:space-y-2 md:space-y-reverse md:justify-self-end md:flex-col-reverse'>
				<button onClick={handleRemoveFromBasket} className='button w-full'>
					Remove from Basket
				</button>

				<QuantitySelector
					onQuantityChange={handleQuantityChange}
					quantity={quantity}
				/>
			</div>
		</section>
	);
};

export default CheckoutProduct;
