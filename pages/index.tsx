import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsBoxSeam } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';
import ImageText from '../components/ImageText';

const Home: NextPage = () => {
	const [scrollPositionY, setScrollPositionY] = useState(0);
	const [scrollPositionX, setScrollPositionX] = useState(0);
	const [activeScrollPillY, setActiveScrollPillY] = useState('');
	const [activeScrollPillX, setActiveScrollPillX] = useState('');

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
		if (scrollPositionY > 0 && scrollPositionY < 800) {
			setActiveScrollPillY('section-one');
		} else if (scrollPositionY > 800 && scrollPositionY < 1500) {
			setActiveScrollPillY('section-two');
		} else if (scrollPositionY > 1500 && scrollPositionY < 2600) {
			setActiveScrollPillY('section-three');
		}
	}, [scrollPositionY]);

	useEffect(() => {
		if (scrollPositionX < 450) {
			setActiveScrollPillX('section-one-x');
		} else if (scrollPositionX > 450) {
			setActiveScrollPillX('section-two-x');
		}
	}, [scrollPositionX]);

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
				<section
					id='section-two'
					className='h-screen snap-start w-full flex flex-col items-center justify-center gap-3 lg:gap-8 xl:gap-10 pt-16 xl:pt-28 '
				>
					<div className='flex gap-4 lg:gap-8 xl:gap-12 justify-center  flex-wrap xl:flex-nowrap'>
						<Card
							image='\assets\images\m2-chip.png'
							title=' Apple M2 Chip'
							text=' M2 is the next generation of Apple silicon. Its 8-core CPU lets you zip through everyday tasks like creating documents and presentations, or take on more intensive workflows like developing in Xcode or mixing tracks in Logic Pro. M2 features up to a 10-core GPU, resulting in a big boost in graphics performance. And its media engine lets you play and edit up to 11 streams of 4K and up to 2 streams of 8K ProRes video.⁴ '
						/>

						<Card
							image='\assets\images\unified-memory.png'
							title=' Unified Memory'
							text=' The more unified memory (RAM) you choose, the more apps you can run simultaneously with a higher rate of performance.
						The 13-inch MacBook Pro can be configured with up to 24GB for more fluid multitasking and easy handling of large files. '
						/>

						<Card
							image='assets\images\storage.png'
							title=' Storage'
							text={` Solid-state drive (SSD) storage is the amount of space your MacBook Pro has for your documents, photos, music, videos, and other files.It delivers significant performance and speed that you'll notice when you start up your Mac, launch an app, or browse your photos. `}
						/>
					</div>

					<div className='flex gap-8 xl:gap-10 '>
						<MiniCard
							icon={<AiOutlineDollarCircle />}
							title='Pay monthly at 0% APR'
							text='You can pay over time when you choose to check out with Apple Card Monthly Installments.†'
						/>

						<MiniCard
							icon={<BsBoxSeam />}
							title='Fast, free delivery'
							text='Choose free delivery or pick up available items at an Apple Store.'
						/>

						<MiniCard
							icon={<TiMessages />}
							title='
							Get help buying'
							text='Have a question? Call a Specialist or chat online.

							Call 1-800-MY-APPLE.'
						/>
					</div>
				</section>

				{/* section three */}
				<section
					id='section-three'
					className='h-full snap-start  flex snap-x snap-mandatory w-full overflow-x-scroll'
					onScroll={(e) => {
						setScrollPositionX(e.currentTarget.scrollLeft);
					}}
				>
					<div
						id='section-one-x'
						className=' snap-start flex items-center justify-center w-screen flex-shrink-0  '
					>
						<div className=' bg-gradient-to-b p-8 from-[#182436] flex flex-col gap-20 lg:flex-row justify-between via-[#151517] to-[#151517] w-[80%] h-[80%] rounded-3xl  mt-16 xl:mt-20'>
							<div className='space-y-10 lg:space-y-40 h-full lg:w-[600px] '>
								<h1 className='font-bold text-3xl'>Touch ID</h1>
								<p className='font-semibold lg:text-2xl xl:text-3xl'>
									A touch on the sensor instantly unlocks your Mac, and a press
									locks it. Use your fingerprint to rent movies, buy apps, or
									access things like locked documents or system settings without
									having to reenter your password. And when you shop online with
									Apple Pay, Touch ID automatically fills in your shipping and
									billing information without sharing your card details.
								</p>
							</div>

							<div className='grid grid-cols-2 content-center  lg:gap-x-20 gap-4 justify-items-center '>
								<ImageText
									image='\assets\images\finger-print.png'
									text='Unlock your Mac'
								/>
								<ImageText
									image='\assets\images\apple-pay.png'
									text='Use Apple Pay for payments'
								/>
								<ImageText
									image='\assets\images\password-document.png'
									text='Open password-protected documents'
								/>
								<ImageText
									image='\assets\images\apple-tv.png'
									text='Make purchases on the Apple TV app'
								/>
							</div>
						</div>
					</div>

					<div
						id='section-two-x'
						className=' snap-start flex items-center justify-center w-screen flex-shrink-0  '
					>
						<div className=' bg-gradient-to-br p-4 sm:p-8 from-[#642C8F] flex flex-col gap-10 lg:flex-row justify-between items-center via-[#7F4E8F] to-[#C76686] w-[80%] h-[80%] rounded-3xl  mt-16 xl:mt-20'>
							<div className=' lg:w-[600px] '>
								<p className='font-semibold lg:text-2xl xl:text-3xl'>
									Ultra‑high bandwidth meets ultra‑versatility. Thunderbolt
									enables data transfer, charging, and video output all through
									a single port — and MacBook Pro has two of them. Wi‑Fi 6 keeps
									MacBook Pro going strong as more and more devices join the
									network. And the headphone jack even supports high‑impedance
									headphones.
								</p>
							</div>

							<div className='grid sm:grid-cols-3 grid-cols-2 lg:grid-cols-2 content-center  lg:gap-x-20 gap-4 justify-items-center '>
								<ImageText
									image='\assets\images\charging.png'
									text='Charging'
								/>
								<ImageText
									image='\assets\images\monitor.png'
									text='External display'
								/>
								<ImageText
									image='\assets\images\data-transfer.png'
									text='Data transfer	up to 40Gb/s15'
								/>
								<ImageText
									image='\assets\images\devices.png'
									text='Connecting your devices'
								/>
								<ImageText
									image='\assets\images\wifi.png'
									text='Wi-Fi 6 up to 1.2Gb/s throughput15'
								/>
								<ImageText
									image='\assets\images\headphone.png'
									text='3.5 mm headphone jack'
								/>
							</div>
						</div>
					</div>

					<AnimatePresence>
						{activeScrollPillY === 'section-three' && (
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
										activeScrollPillX === 'section-one-x'
											? 'bg-blue-500'
											: 'bg-white'
									} w-12 h-3 rounded-full `}
								></motion.a>
								<motion.a
									href='#section-two-x'
									className={`${
										activeScrollPillX === 'section-two-x'
											? 'bg-blue-500'
											: 'bg-white'
									} w-12 h-3 rounded-full `}
									variants={scrollPill}
								></motion.a>
							</motion.div>
						)}
					</AnimatePresence>
				</section>
			</div>
		</>
	);
};

export default Home;
