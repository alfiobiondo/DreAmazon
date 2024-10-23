import Navigation from '@/components/Navigation';
import Image from 'next/image';
import React from 'react';

const Checkout = () => {
	return (
		<div className='bg-gray-100'>
			<Navigation />
			<main className='lg:flex max-w-screen-2xl mx-auto'>
				{/* Left hand side */}
				<section className='flex-grow m-5 shadow-sm'>
					<Image
						src='https://links.papareact.com/ikj'
						width={1020}
						height={250}
						alt='Prime day advertisement'
						className='object-contain'
					/>

					<div className='flex flex-col p-5 space-y-10 bg-white'>
						<h1 className='text-3xl border-b pb-4'>Your Shopping Basket</h1>
					</div>
				</section>

				{/* Right hand side */}
				<section></section>
			</main>
		</div>
	);
};

export default Checkout;
