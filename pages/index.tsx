import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Home: NextPage = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [activeScrollPill, setActiveScrollPill] = useState('');

	const textContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const textItem = {
		hidden: { y: -50, opacity: 0 },
		show: { y: 0, opacity: 1, transition: { duration: 1.2 } },
	};

	const scrollPillsContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const scrollPill = {
		hidden: { scale: 0.5, opacity: 0 },
		show: { scale: 1, opacity: 1, transition: { duration: 1 } },
	};

	useEffect(() => {
		if (scrollPosition > 0 && scrollPosition < 900) {
			setActiveScrollPill('section-one');
		} else if (scrollPosition > 900 && scrollPosition < 1700) {
			setActiveScrollPill('section-two');
		} else if (scrollPosition > 1700 && scrollPosition < 2600) {
			setActiveScrollPill('section-three');
		}
	}, [scrollPosition]);

	return (
		<>
			<Head>
				<title>Apple | MacBook Pro</title>
				<link rel='icon' href='/assets/images/apple-logo.png' />
			</Head>

			{/* scroll pills */}
			<motion.div
				variants={scrollPillsContainer}
				initial='hidden'
				animate='show'
				className='outline h-full w-10 flex flex-col justify-center gap-6 items-center z-40  fixed right-0 top-0 '
			>
				<motion.a
					variants={scrollPill}
					href='#section-one'
					className={`${
						activeScrollPill === 'section-one' ? 'bg-blue-500' : 'bg-white'
					} h-12 w-3 rounded-full `}
				></motion.a>
				<motion.a
					href='#section-two'
					className={`${
						activeScrollPill === 'section-two' ? 'bg-blue-500' : 'bg-white'
					} h-12 w-3 rounded-full `}
					variants={scrollPill}
				></motion.a>
				<motion.a
					href='#section-three'
					className={`${
						activeScrollPill === 'section-three' ? 'bg-blue-500' : 'bg-white'
					} h-12 w-3 rounded-full `}
					variants={scrollPill}
				></motion.a>
			</motion.div>

			<div
				className='h-screen snap-y snap-mandatory overflow-y-scroll text-white bg-black'
				onScroll={(e) => {
					setScrollPosition(e.currentTarget.scrollTop);
				}}
			>
				<Header scrollPosition={scrollPosition} />

				{/* section one */}
				<section
					className='relative h-screen pt-20 snap-start flex flex-col justify-between '
					id='section-one'
				>
					{/* macbook video */}
					<div className='flex items-center justify-center mt-10 xl:mt-0'>
						<video className='xl:max-w-7xl w-auto' autoPlay muted>
							<source
								src='/assets/video/macbook-halfopen.mp4'
								type='video/mp4'
							/>
							Sorry, your browser doesn't support videos.
						</video>
					</div>

					{/* text */}
					<motion.div
						className='absolute left-0 top-[400px]  w-full md:top-[500px] lg:top-[550px] space-y-4 flex items-center flex-col'
						variants={textContainer}
						initial='hidden'
						animate='show'
					>
						<motion.h1 className='text-5xl font-semibold ' variants={textItem}>
							MacBook Pro
						</motion.h1>

						<motion.div
							className='flex flex-col items-center gap-6 md:flex-row'
							variants={textItem}
						>
							<h1 className='text-3xl font-semibold '>Supercharged by</h1>
							<img
								src='assets/images/macbook-m2.jpg'
								alt=''
								className='md:w-16 md:h-16 w-32 h-32'
							/>
						</motion.div>
						<motion.h3 className='text-2xl font-medium' variants={textItem}>
							From $1299
						</motion.h3>
					</motion.div>

					{/* scroll down arrow */}
					<motion.a
						href='#section-two'
						className='flex items-center justify-center w-full cursor-pointer animate-bounce pb-2'
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2, delay: 2 }}
					>
						<FaChevronDown
							fontSize='large'
							className='hover:scale-150 transition-all duration-300'
						/>
					</motion.a>
				</section>

				{/* section two */}
				<section id='section-two' className='h-screen snap-start'>
					2
				</section>

				{/* section three */}
				<section id='section-three' className='h-screen snap-start'>
					3
				</section>
			</div>
		</>
	);
};

export default Home;
