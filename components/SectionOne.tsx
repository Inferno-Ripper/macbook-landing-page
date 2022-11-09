import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

type Props = {
	setActiveScrollPillY: React.Dispatch<React.SetStateAction<string>>;
	scrollPositionY: number;
};

const SectionOne = ({ setActiveScrollPillY, scrollPositionY }: Props) => {
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

	const { ref: sectionOne, inView: sectionOneInView } = useInView();

	useEffect(() => {
		if (sectionOneInView) {
			setActiveScrollPillY('section-one');
		}
	}, [scrollPositionY]);

	return (
		<section
			className='relative h-screen pt-20 snap-start flex flex-col justify-between '
			id='section-one'
		>
			{/* macbook video */}
			<div className='flex items-center justify-center mt-10 xl:mt-0'>
				<video className='xl:max-w-7xl w-auto' autoPlay muted>
					<source src='/assets/video/macbook-halfopen.mp4' type='video/mp4' />
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
				<motion.h1
					className='text-5xl font-semibold '
					variants={textItem}
					ref={sectionOne}
				>
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
	);
};

export default SectionOne;
