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
			className='bg-[#1D1D1F] w-96 rounded-lg p-4 md:p-6 md:space-y-4 space-y-1 hover:outline cursor-pointer transition-all duration-300'
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<div className='h-10 xl:h-20'>
				<img src={image} alt='' className='w-10 xl:w-20 rounded-lg' />
			</div>

			<h1 className='font-semibold xl:text-xl'>{title}</h1>

			<p className='text-xs xl:text-sm'>{text}</p>
		</motion.div>
	);
};

export default Card;
