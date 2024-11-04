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

			<Navigation />

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
		const products = await fetch('https://fakestoreapi.com/products').then(
			(res) => res.json()
		);

		return {
			props: {
				products,
				session,
			},
		};
	} catch (error) {
		console.log('getServerSideProps error', error);
		return {
			props: {
				products: [], // Return an empty array in case of error
				session,
			},
		};
	}
}
