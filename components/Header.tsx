import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface Props {
	scrollPositionY: number;
}

const Header = ({ scrollPositionY }: Props) => {
	const [isScrollDown, setIsScrollDown] = useState(false);

	useEffect(() => {
		if (scrollPositionY > 500) {
			setIsScrollDown(true);
		} else if (scrollPositionY <= 500) {
			setIsScrollDown(false);
		}
	}, [scrollPositionY]);

	return (
		<div
			className={`${
				isScrollDown ? 'top-3 lg:top-5' : 'top-2 '
			} flex w-full left-0 sticky items-center justify-center z-50 overflow-x-hidden`}
		>
			<div
				className={`${
					isScrollDown
						? ' xl:w-[1200px] w-[450px]  sm:w-[550px] md:w-[700px] lg:w-[900px] bg-white  text-black rounded-lg backdrop-blur-3xl hover:bg-white/90 bg-white/80'
						: ''
				} px-4 flex items-center justify-between w-full h-14 transition-all duration-300 ease-out `}
			>
				<motion.div
					initial={{ x: -500 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.5 }}
				>
					<a href='#section-one'>
						{isScrollDown ? (
							<img
								src='assets\images\apple-logo-black.png'
								alt=''
								className='h-10 cursor-pointer'
							/>
						) : (
							<img
								src='assets\images\apple-logo.png'
								alt=''
								className='h-10 cursor-pointer'
							/>
						)}
					</a>
				</motion.div>

				<motion.div
					className='flex gap-8 md:gap-10'
					initial={{ x: 500 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.5 }}
				>
					<button
						className={`${
							isScrollDown ? 'from-black to-black' : 'from-white to-white'
						} relative font-semibold tracking-wide text-lg ease-in-out bg-bottom bg-gradient-to-r  bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500`}
					>
						<a href='#section-one'>Home</a>
					</button>
					<button
						className={`${
							isScrollDown ? 'from-black to-black' : 'from-white to-white'
						} relative font-semibold tracking-wide text-lg ease-in-out bg-bottom bg-gradient-to-r  bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500`}
					>
						About
					</button>
					<button
						className={`${
							isScrollDown ? 'from-black to-black' : 'from-white to-white'
						} relative font-semibold tracking-wide text-lg ease-in-out bg-bottom bg-gradient-to-r  bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500`}
					>
						Contact
					</button>
					<div className='flex items-center py-2 pl-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg cursor-pointer group hover:gap-2 '>
						<p>Buy</p>

						<div className='pt-1 tracking-wide text-white transition-all duration-300 opacity-0 group-hover:pr-2 group-hover:opacity-100 group-hover:pl-3'>
							<HiArrowNarrowRight fontSize='large' />
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Header;
