import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

const Home = () => {
	return (
		<div>
			<Head>
				<title>DreAmazon</title>
			</Head>
			<Header />
		</div>
	);
};

export default Home;
