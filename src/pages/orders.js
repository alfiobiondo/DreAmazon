import React from 'react';

import Navigation from '@/components/Navigation';
import { getSession, useSession } from 'next-auth/react';

import admin from '@/firebase/admin';

import moment from 'moment';
import Order from '@/components/Order';

const Orders = ({ orders }) => {
	const { data: session } = useSession();

	return (
		<div>
			<main className='max-w-screen-lg mx-auto p-10'>
				<h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>
					Your Orders
				</h1>

				{session ? (
					<h2>{orders.length} Orders</h2>
				) : (
					<h2>Please sign in to see your orders</h2>
				)}

				<div className='mt-5 space-y-4'>
					{orders?.map(
						({ id, amount, amountShipping, items, timestamp, images }) => (
							<Order
								key={id}
								id={id}
								amount={amount}
								amountShipping={amountShipping}
								items={items}
								timestamp={timestamp}
								images={images}
							/>
						)
					)}
				</div>
			</main>
		</div>
	);
};

export default Orders;

export async function getServerSideProps(context) {
	const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

	// Get the users logged in credentials...
	const session = await getSession(context);

	if (!session) {
		return {
			props: {},
		};
	}

	// Use the Firebase Admin SDK to interact with Firestore
	try {
		// Fetch the user's orders from Firestore
		const ordersRef = admin
			.firestore()
			.collection('users')
			.doc(session.user.email)
			.collection('orders')
			.orderBy('timestamp', 'desc');

		const stripeOrders = await ordersRef.get();

		// Stripe orders
		const orders = await Promise.all(
			stripeOrders.docs.map(async (order) => ({
				id: order.id,
				amount: order.data().amount,
				amountShipping: order.data().amount_shipping,
				images: order.data().images,
				timestamp: moment(order.data().timestamp.toDate()).unix(),
				items: (
					await stripe.checkout.sessions.listLineItems(order.id, {
						limit: 100,
					})
				).data,
			}))
		);

		// Return the orders to the client
		return {
			props: {
				orders,
			},
		};
	} catch (error) {
		console.error('Error fetching orders:', error);
		return { props: {} };
	}
}
