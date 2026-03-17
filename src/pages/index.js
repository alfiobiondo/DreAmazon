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

export async function getServerSideProps(context) {
	const session = await getSession(context);

	try {
		const res = await fetch('https://fakestoreapi.com/products');

		console.log('STATUS:', res.status);

		const products = await res.json();

		console.log('PRODUCTS LENGTH:', products?.length);

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
				products: [],
				session,
			},
		};
	}
}
