import React from 'react';
import Image from 'next/image';
import {
	MagnifyingGlassIcon,
	Bars3Icon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navigation = () => {
	return (
		<header>
			<nav>
				{/* Top nav */}
				<div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
					{/* Logo */}
					<div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
						<Link href='/'>
							<Image
								alt='Amazon logo'
								src='https://links.papareact.com/f90'
								width={150}
								height={40}
								className='object-contain cursor-pointer h-10'
							/>
						</Link>
					</div>

					{/* SearchBar */}
					<div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
						<input
							type='text'
							className='border-none p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
						/>
						<MagnifyingGlassIcon className='h-12 p-4' />
					</div>

					{/* RightHandSide */}
					<ul className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
						<li className='link'>
							<a href='#'>
								<p>Hello Alfio Biondo</p>
								<p className='font-extrabold md:text-sm'>Account & Lists</p>
							</a>
						</li>

						<li className='link'>
							<a href='#'>
								<p>Returns</p>
								<p className='font-extrabold md:text-sm'>& Orders</p>
							</a>
						</li>

						<li className='link'>
							<a href='#' className='relative flex items-center'>
								<span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
									0
								</span>
								<ShoppingCartIcon className='h-10' />
								<p className='hidden md:inline font-extrabold md:text-sm mt-2'>
									Basket
								</p>
							</a>
						</li>
					</ul>
				</div>

				{/* Bottom nav */}
				<ul className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
					<li>
						<a className='link flex items-center' href='#'>
							<Bars3Icon className='h-6 mr-1' />
							All
						</a>
					</li>
					<li>
						<a className='link' href='#'>
							Prime Video
						</a>
					</li>
					<li>
						<a className='link' href='#'>
							Amazon Business
						</a>
					</li>
					<li>
						<a className='link' href='#'>
							Today&apos;s Deals
						</a>
					</li>
					<li>
						<a className='link hidden lg:inline-flex' href='#'>
							Electronics
						</a>
					</li>
					<li>
						<a className='link hidden lg:inline-flex' href='#'>
							Food & Grocery
						</a>
					</li>
					<li>
						<a className='link hidden lg:inline-flex' href='#'>
							Prime
						</a>
					</li>
					<li>
						<a className='link hidden lg:inline-flex' href='#'>
							Buy Again
						</a>
					</li>
					<li>
						<a className='link hidden lg:inline-flex' href='#'>
							Shopper Toolkit
						</a>
					</li>
					<li>
						<a className='link hidden lg:inline-flex' href='#'>
							Health & Personal Care
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;