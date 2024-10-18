import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
	return (
		<section className='relative'>
			<div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<section>
					<img
						loading='lazy'
						src='https://links.papareact.com/gi1'
						alt='first carousel image'
					/>
				</section>

				<section>
					<img
						loading='lazy'
						src='https://links.papareact.com/6ff'
						alt='second carousel image'
					/>
				</section>

				<section>
					<img
						loading='lazy'
						src='https://links.papareact.com/7ma'
						alt='third carousel image'
					/>
				</section>
			</Carousel>
		</section>
	);
};

export default Banner;
