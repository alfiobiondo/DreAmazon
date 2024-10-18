import React from 'react';
import Image from 'next/image';
import {
	MagnifyingGlassIcon,
	Bars3Icon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
	return (
		<header>
			{/* Top nav */}
			<section className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
				{/* Logo */}
				<section className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
					<Image
						alt='Amazon logo'
						src='https://links.papareact.com/f90'
						width={150}
						height={40}
						className='object-contain cursor-pointer'
					/>
				</section>

				{/* SearchBar */}
				<section className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
					<input
						type='text'
						className='border-none p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
					/>
					<MagnifyingGlassIcon className='h-12 p-4' />
				</section>

				{/* RightHandSide */}
				<section className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
					<section className='link'>
						<p>Hello Alfio Biondo</p>
						<p className='font-extrabold md:text-sm'>Account & Lists</p>
					</section>

					<section className='link'>
						<p>Returns</p>
						<p className='font-extrabold md:text-sm'>& Orders</p>
					</section>

					<section className='relative link flex items-center'>
						<span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
							0
						</span>

						<ShoppingCartIcon className='h-10' />
						<p className='hidden md:inline font-extrabold md:text-sm mt-2'>
							Basket
						</p>
					</section>
				</section>
			</section>

			{/* Bottom nav */}
			<section></section>
		</header>
	);
};

export default Header;
