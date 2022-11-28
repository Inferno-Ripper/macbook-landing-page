import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	image: string;
	text: string;
};

const ImageText = ({ image, text }: Props) => {
	const imageTextAnimation = {
		hidden: { scale: 0.5, opacity: 0, y: -100, x: 100 },
		show: { scale: 1, opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.div variants={imageTextAnimation}>
			<div className='w-32 h-32 space-y-4 transition-all duration-300 cursor-pointer hover:scale-110 md:w-36 md:h-36 lg:w-32 lg:h-32 xl:w-52 xl:h-44 '>
				<img src={image} alt='' className='h-10 md:h-14 xl:h-16' />
				<h1 className='w-full text-sm font-semibold break-words lg:text-sm xl:text-2xl'>
					{text}
				</h1>
			</div>
		</motion.div>
	);
};

export default ImageText;
