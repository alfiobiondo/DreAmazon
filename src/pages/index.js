import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Banner from '@/components/Banner';
import ProductFeed from '@/components/ProductFeed';
import { getSession } from 'next-auth/react';

const Home = ({ products }) => {
	return (
		<div className='bg-gray-100'>
			<Head>
				<title>DreAmazon</title>
			</Head>

			<main className='max-w-screen-2xl mx-auto'>
				<Banner />

				<ProductFeed products={products} />
			</main>
		</div>
	);
};

export default Home;

const fallbackProducts = [
	{
		id: 1,
		title: 'Apple AirPods Pro (2nd Generation)',
		price: 249.99,
		description:
			'Active Noise Cancellation, Transparency mode, Personalized Spatial Audio, MagSafe Charging Case',
		category: 'electronics',
		image:
			'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=500&q=80',
		rating: { rate: 4.8, count: 1200 },
	},
	{
		id: 2,
		title: 'Sony WH-1000XM5 Wireless Headphones',
		price: 399.99,
		description:
			'Industry-leading noise canceling headphones with exceptional sound quality and comfort',
		category: 'electronics',
		image:
			'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&q=80',
		rating: { rate: 4.7, count: 980 },
	},
	{
		id: 3,
		title: 'Nike Air Force 1 Sneakers',
		price: 109.99,
		description:
			'Classic design with premium leather and durable rubber outsole for everyday comfort',
		category: "men's clothing",
		image:
			'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
		rating: { rate: 4.6, count: 740 },
	},
	{
		id: 4,
		title: 'Levi’s 501 Original Fit Jeans',
		price: 79.99,
		description:
			'Straight leg jeans with classic fit and durable denim construction',
		category: "men's clothing",
		image:
			'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80',
		rating: { rate: 4.5, count: 520 },
	},
	{
		id: 5,
		title: 'Amazon Echo Dot (5th Gen)',
		price: 59.99,
		description:
			'Smart speaker with Alexa, improved audio, and smart home integration',
		category: 'electronics',
		image:
			'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
		rating: { rate: 4.7, count: 2100 },
	},
	{
		id: 6,
		title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
		price: 99.99,
		description:
			'Multi-use programmable pressure cooker for quick and easy meals',
		category: 'home',
		image:
			'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&q=80',
		rating: { rate: 4.8, count: 3100 },
	},
	{
		id: 7,
		title: 'Apple MacBook Air M2 (13-inch)',
		price: 1199.99,
		description:
			'Supercharged by M2 chip, lightweight design, all-day battery life',
		category: 'electronics',
		image:
			'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
		rating: { rate: 4.9, count: 890 },
	},
	{
		id: 8,
		title: 'Adidas Essentials Hoodie',
		price: 49.99,
		description: 'Soft fleece hoodie for everyday wear with a relaxed fit',
		category: "men's clothing",
		image:
			'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
		rating: { rate: 4.4, count: 430 },
	},
];

export async function getServerSideProps(context) {
	const session = await getSession(context);

	try {
		const res = await fetch('https://fakestoreapi.com/products');

		if (!res.ok) {
			throw new Error(`Fetch failed with status ${res.status}`);
		}

		const contentType = res.headers.get('content-type') || '';

		if (!contentType.includes('application/json')) {
			throw new Error('API did not return JSON');
		}

		const products = await res.json();

		return {
			props: {
				products,
				session,
			},
		};
	} catch (error) {
		console.error('SSR ERROR:', error);

		return {
			props: {
				products: fallbackProducts,
				session,
			},
		};
	}
}
