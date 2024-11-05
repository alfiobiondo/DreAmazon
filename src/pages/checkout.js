import React, { useEffect } from 'react';

import CheckoutProduct from '@/components/CheckoutProduct';
import Navigation from '@/components/Navigation';

import Image from 'next/image';
import { FormattedNumber, IntlProvider } from 'react-intl';

import { useSession } from 'next-auth/react';
import useBasket from '@/hooks/useBasket';

import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
	const { data: session } = useSession();
	const { items, total } = useBasket();

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
		if (query.get('success')) {
			console.log('Order placed! You will receive an email confirmation.');
		}

		if (query.get('canceled')) {
			console.log(
				'Order canceled -- continue to shop around and checkout when you’re ready.'
			);
		}
	}, []);

	const createCheckoutSession = async () => {
		// Initialize Stripe
		const stripe = await stripePromise;

		try {
			// Create the checkout session on the backend
			const { data } = await axios.post('/api/checkout_sessions', {
				items,
				email: session.user.email,
			});

			// Redirect directly to the session URL
			const result = await stripe.redirectToCheckout({
				sessionId: data.id,
			});

			if (result.error) alert(result.error.message);
		} catch (error) {
			console.error('Error creating checkout session:', error);
		}
	};

	return (
		<div className='bg-gray-100'>
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
						<h1 className='text-3xl border-b pb-4'>
							{items.length === 0
								? 'Your DreAmazon Basket is empty'
								: 'Shopping Basket'}
						</h1>

						{items.map((item, i) => (
							<CheckoutProduct
								key={i}
								id={item.id}
								title={item.title}
								price={item.price}
								rating={item.rating}
								description={item.description}
								category={item.category}
								image={item.image}
								hasPrime={item.hasPrime}
								instanceId={item.instanceId}
								quantity={item.quantity}
							/>
						))}
					</div>
				</section>

				{/* Right hand side */}
				<section className='flex flex-col min-w-[300px] bg-white p-10 shadow-md'>
					{items.length > 0 && (
						<>
							<h2 className='whitespace-nowrap'>
								Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)}{' '}
								items):{' '}
								<span className='font-bold'>
									<IntlProvider locale='it' defaultLocale='it'>
										<FormattedNumber
											value={total}
											style='currency'
											currency='EUR'
										/>
									</IntlProvider>
								</span>
							</h2>

							<button
								// type='submit'
								role='link'
								onClick={createCheckoutSession}
								disabled={!session}
								className={`button mt-2 ${
									!session &&
									'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
								}`}
							>
								{!session ? 'Sign in to checkout' : 'Proceed to checkout'}
							</button>
						</>
					)}
				</section>
			</main>
		</div>
	);
};

export default Checkout;
