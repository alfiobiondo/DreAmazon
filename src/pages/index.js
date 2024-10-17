import Head from 'next/head';
import React from 'react';

const Home = () => {
	return (
		<div>
			<Head>
				<title>DreAmazon</title>
			</Head>
			<section>
				<h1>Welcome to DreAmazon!</h1>
				<p>
					Our mission is to provide high-quality products at an affordable
					price.
				</p>
			</section>
		</div>
	);
};

export default Home;
