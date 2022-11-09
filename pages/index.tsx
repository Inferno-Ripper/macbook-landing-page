import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';

const Home: NextPage = () => {
	const [scrollPositionY, setScrollPositionY] = useState(0);
	const [activeScrollPillY, setActiveScrollPillY] = useState('section-one');

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
				className=' h-full w-10 flex flex-col justify-center gap-6 items-center z-40  fixed right-0 top-0 '
			>
				<motion.a
					variants={scrollPill}
					href='#section-one'
					className={`${
						activeScrollPillY === 'section-one' ? 'bg-blue-500' : 'bg-white'
					} h-12 w-3 rounded-full `}
				></motion.a>
				<motion.a
					href='#section-two'
					className={`${
						activeScrollPillY === 'section-two' ? 'bg-blue-500' : 'bg-white'
					} h-12 w-3 rounded-full `}
					variants={scrollPill}
				></motion.a>
				<motion.a
					href='#section-three'
					className={`${
						activeScrollPillY === 'section-three' ? 'bg-blue-500' : 'bg-white'
					} h-12 w-3 rounded-full `}
					variants={scrollPill}
				></motion.a>
			</motion.div>

			<div
				className='h-screen snap-y snap-mandatory overflow-y-scroll  text-white bg-black'
				onScroll={(e) => {
					setScrollPositionY(e.currentTarget.scrollTop);
				}}
			>
				<Header scrollPositionY={scrollPositionY} />

				<SectionOne
					setActiveScrollPillY={setActiveScrollPillY}
					scrollPositionY={scrollPositionY}
				/>

				<SectionTwo
					setActiveScrollPillY={setActiveScrollPillY}
					scrollPositionY={scrollPositionY}
					scrollPillsContainer={scrollPillsContainer}
					scrollPill={scrollPill}
					activeScrollPillY={activeScrollPillY}
				/>

				<SectionThree
					setActiveScrollPillY={setActiveScrollPillY}
					scrollPositionY={scrollPositionY}
				/>
			</div>
		</>
	);
};

export default Home;
