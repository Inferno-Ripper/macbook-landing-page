import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsBoxSeam } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';

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
		if (scrollPosition > 0 && scrollPosition < 800) {
			setActiveScrollPill('section-one');
		} else if (scrollPosition > 800 && scrollPosition < 1500) {
			setActiveScrollPill('section-two');
		} else if (scrollPosition > 1500 && scrollPosition < 2600) {
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
				className='h-screen snap-y snap-mandatory overflow-y-scroll  text-white bg-black'
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
				<section id='section-three' className='h-screen snap-start'>
					3
				</section>
			</div>
		</>
	);
};

export default Home;
