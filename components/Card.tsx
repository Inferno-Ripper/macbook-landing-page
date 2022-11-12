import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	image: string;
	title: string;
	text: string;
};

const Card = ({ image, title, text }: Props) => {
	return (
		<motion.div
			className='w-96 xl:h-96 md:h-64'
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<div className='bg-[#1D1D1F] w-full h-full rounded-lg p-4 md:p-6 md:space-y-4 space-y-1 hover:scale-105 cursor-pointer transition-all duration-300'>
				<div className='h-10 xl:h-20'>
					<img src={image} alt='' className='w-10 h-full rounded-lg xl:w-20 ' />
				</div>

				<h1 className='font-semibold xl:text-xl'>{title}</h1>

				<p className='text-xs xl:text-sm'>{text}</p>
			</div>
		</motion.div>
	);
};

export default Card;
