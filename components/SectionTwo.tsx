import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageText from './ImageText';
import { useInView } from 'react-intersection-observer';
import { imageTextOne, imageTextTwo } from '../data';

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

	useEffect(() => {
		if (sectionTwoXOneInView) {
			setSectionTwoX('section-two-x-one');
		}
	}, [scrollPositionX]);

	const { ref: sectionTwoXTwo, inView: sectionTwoXTwoInView } = useInView();

	useEffect(() => {
		if (sectionTwoXTwoInView) {
			setSectionTwoX('section-two-x-two');
		}
	}, [scrollPositionX]);

	return (
		<section
			id='section-two'
			className='h-full snap-start  flex snap-x snap-mandatory w-full overflow-x-scroll'
			onScroll={(e) => {
				setScrollPositionX(e.currentTarget.scrollLeft);
			}}
		>
			<div
				id='section-one-x'
				className=' snap-start flex items-center  justify-center w-screen flex-shrink-0  '
			>
				<div
					ref={sectionTwo}
					className=' bg-gradient-to-b p-8 from-[#182436] flex flex-col gap-20 lg:flex-row justify-between via-[#151517] to-[#151517] w-[80%] h-[80%] rounded-3xl  mt-16 xl:mt-20'
				>
					<div className='space-y-10 lg:space-y-40 h-full lg:w-[600px] '>
						<h1 className='font-bold text-3xl'>Touch ID</h1>
						<p
							className='font-semibold lg:text-2xl xl:text-3xl'
							ref={sectionTwoXOne}
						>
							A touch on the sensor instantly unlocks your Mac, and a press
							locks it. Use your fingerprint to rent movies, buy apps, or access
							things like locked documents or system settings without having to
							reenter your password. And when you shop online with Apple Pay,
							Touch ID automatically fills in your shipping and billing
							information without sharing your card details.
						</p>
					</div>

					<div className='grid grid-cols-2 content-center  lg:gap-x-20 gap-4 justify-items-center '>
						{imageTextOne.map(({ image, text }) => (
							<ImageText image={image} text={text} />
						))}
					</div>
				</div>
			</div>

			<div
				id='section-two-x'
				className=' snap-start flex items-center justify-center w-screen flex-shrink-0  '
			>
				<div className=' bg-gradient-to-br p-4 sm:p-8 from-[#642C8F] flex flex-col gap-10 lg:flex-row justify-between items-center via-[#7F4E8F] to-[#C76686] w-[80%] h-[80%] rounded-3xl  mt-16 xl:mt-20'>
					<div className=' lg:w-[600px] '>
						<p
							className='font-semibold lg:text-2xl xl:text-3xl'
							ref={sectionTwoXTwo}
						>
							Ultra‑high bandwidth meets ultra‑versatility. Thunderbolt enables
							data transfer, charging, and video output all through a single
							port — and MacBook Pro has two of them. Wi‑Fi 6 keeps MacBook Pro
							going strong as more and more devices join the network. And the
							headphone jack even supports high‑impedance headphones.
						</p>
					</div>

					<div className='grid sm:grid-cols-3 grid-cols-2 lg:grid-cols-2 content-center  lg:gap-x-20 gap-4 justify-items-center '>
						{imageTextTwo.map(({ image, text }) => (
							<ImageText image={image} text={text} />
						))}
					</div>
				</div>
			</div>

			<AnimatePresence>
				{activeScrollPillY === 'section-two' && (
					<motion.div
						variants={scrollPillsContainer}
						initial='hidden'
						animate='show'
						exit={{ opacity: 0 }}
						className='h-10 flex w-full fixed bottom-0 left-0 justify-center gap-6 items-center z-40'
					>
						<motion.a
							variants={scrollPill}
							href='#section-one-x'
							className={`${
								sectionTwoX === 'section-two-x-one' ? 'bg-blue-500' : 'bg-white'
							} w-12 h-3 rounded-full `}
						></motion.a>

						<motion.a
							href='#section-two-x'
							className={`${
								sectionTwoX === 'section-two-x-two' ? 'bg-blue-500' : 'bg-white'
							} w-12 h-3 rounded-full `}
							variants={scrollPill}
						></motion.a>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default SectionTwo;
