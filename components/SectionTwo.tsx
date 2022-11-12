import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageText from './ImageText';
import { useInView } from 'react-intersection-observer';
import { imageTextOne, imageTextTwo } from '../data';
import { v4 as uuid } from 'uuid';

type Props = {
	setActiveScrollPillY: React.Dispatch<React.SetStateAction<string>>;
	scrollPositionY: number;
	scrollPillsContainer: {};
	scrollPill: {};
	activeScrollPillY: string;
};

const SectionTwo = ({
	setActiveScrollPillY,
	scrollPositionY,
	scrollPillsContainer,
	scrollPill,
	activeScrollPillY,
}: Props) => {
	const [sectionTwoX, setSectionTwoX] = useState('section-two-x-one');
	const [scrollPositionX, setScrollPositionX] = useState(0);

	const { ref: sectionTwo, inView: sectionTwoInView } = useInView();

	useEffect(() => {
		if (sectionTwoInView || sectionTwoXTwoInView) {
			setActiveScrollPillY('section-two');
		}
	}, [scrollPositionY]);

	const { ref: sectionTwoXOne, inView: sectionTwoXOneInView } = useInView();

	const { ref: sectionTwoXTwo, inView: sectionTwoXTwoInView } = useInView();

	useEffect(() => {
		if (sectionTwoXOneInView) {
			setSectionTwoX('section-two-x-one');
		} else if (sectionTwoXTwoInView) {
			setSectionTwoX('section-two-x-two');
		}
	}, [scrollPositionX]);

	const imageTextAnimationContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	return (
		<section
			id='section-two'
			className='flex w-full h-full overflow-x-scroll snap-start snap-x snap-mandatory'
			onScroll={(e) => {
				setScrollPositionX(e.currentTarget.scrollLeft);
			}}
		>
			<div
				id='section-one-x'
				className='flex items-center justify-center flex-shrink-0 w-screen snap-start'
			>
				<motion.div
					ref={sectionTwo}
					className=' bg-gradient-to-b p-8  from-[#182436] flex flex-col gap-20 lg:flex-row justify-between via-[#151517] to-[#151517] w-[80%] h-[80%] rounded-3xl  mt-16 xl:mt-20'
					initial={{ scale: 0.8 }}
					whileInView={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<div className='space-y-10 lg:space-y-40 h-full lg:w-[600px] '>
						<motion.h1
							className='text-3xl font-bold'
							initial={{ opacity: 0.5 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
							viewport={{ once: true }}
						>
							Touch ID
						</motion.h1>
						<motion.p
							className='font-semibold lg:text-2xl xl:text-3xl'
							ref={sectionTwoXOne}
							initial={{ opacity: 0.5, y: -100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
						>
							A touch on the sensor instantly unlocks your Mac, and a press
							locks it. Use your fingerprint to rent movies, buy apps, or access
							things like locked documents or system settings without having to
							reenter your password. And when you shop online with Apple Pay,
							Touch ID automatically fills in your shipping and billing
							information without sharing your card details.
						</motion.p>
					</div>

					<motion.div
						className='grid content-center grid-cols-2 gap-4 lg:gap-x-20 justify-items-center '
						variants={imageTextAnimationContainer}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						{imageTextOne.map(({ image, text }, index) => (
							<ImageText key={index} image={image} text={text} />
						))}
					</motion.div>
				</motion.div>
			</div>

			<div
				id='section-two-x'
				className='flex items-center justify-center flex-shrink-0 w-screen snap-start'
			>
				<motion.div
					className=' bg-gradient-to-br p-4  sm:p-8 from-[#642C8F] flex flex-col gap-10 lg:flex-row justify-between items-center via-[#7F4E8F] to-[#C76686] w-[80%] h-[80%] rounded-3xl  mt-16 xl:mt-20'
					initial={{ scale: 0.8 }}
					whileInView={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<div className=' lg:w-[600px] '>
						<motion.p
							className='font-semibold lg:text-2xl xl:text-3xl'
							ref={sectionTwoXTwo}
							initial={{ opacity: 0.5, y: -100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
						>
							Ultra‑high bandwidth meets ultra‑versatility. Thunderbolt enables
							data transfer, charging, and video output all through a single
							port — and MacBook Pro has two of them. Wi‑Fi 6 keeps MacBook Pro
							going strong as more and more devices join the network. And the
							headphone jack even supports high‑impedance headphones.
						</motion.p>
					</div>

					<motion.div
						className='grid content-center grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 lg:gap-x-20 justify-items-center '
						variants={imageTextAnimationContainer}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						{imageTextTwo.map(({ image, text }, index) => (
							<ImageText key={index} image={image} text={text} />
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* section two vertical/X pills */}
			<AnimatePresence>
				{activeScrollPillY === 'section-two' && (
					<motion.div
						variants={scrollPillsContainer}
						initial='hidden'
						animate='show'
						exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.3 } }}
						className='fixed bottom-0 left-0 z-40 flex items-center justify-center w-full h-10 gap-6'
					>
						<motion.a variants={scrollPill} href='#section-one-x'>
							<p
								className={`${
									sectionTwoX === 'section-two-x-one'
										? 'bg-blue-500'
										: 'bg-white'
								} w-12 h-3 rounded-full hover:w-16 transition-all duration-300`}
							></p>
						</motion.a>

						<motion.a href='#section-two-x' variants={scrollPill}>
							<p
								className={`${
									sectionTwoX === 'section-two-x-two'
										? 'bg-blue-500'
										: 'bg-white'
								} w-12 h-3 rounded-full hover:w-16 transition-all duration-300`}
							></p>
						</motion.a>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default SectionTwo;
