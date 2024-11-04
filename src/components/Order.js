import React from 'react';

import Image from 'next/image';

import moment from 'moment';
import { IntlProvider, FormattedNumber, FormattedMessage } from 'react-intl';

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
	return (
		<article className='relative border rounded-md'>
			<div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
				<div>
					<p className='font-bold text-xs'>ORDER PLACED</p>
					<p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
				</div>

				<div>
					<p className='text-xs font-bold'>TOTAL</p>
					<p className='flex'>
						<IntlProvider locale='it' defaultLocale='it'>
							<FormattedNumber value={amount} style='currency' currency='EUR' />
						</IntlProvider>
						{amountShipping ? (
							<IntlProvider locale='it' defaultLocale='it'>
								<p className='mx-1'>- Next Day Delivery </p>
								<FormattedNumber
									value={amountShipping}
									style='currency'
									currency='EUR'
								/>
							</IntlProvider>
						) : (
							' - Free Shipping'
						)}
					</p>
				</div>

				<p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
					{items.length} items
				</p>

				<p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
					ORDER # {id}
				</p>
			</div>

			<div className='p-5 sm:p-10'>
				<div className='flex space-x-6 overflow-x-auto'>
					{images.map((image, index) => (
						<Image
							key={id + index}
							src={image}
							alt='Ordered product image'
							height={128}
							width={128}
							className='h-20 max-w-20 object-contain sm:h-32 sm:max-w-32'
						/>
					))}
				</div>
			</div>
		</article>
	);
};

export default Order;
