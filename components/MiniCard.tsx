import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	icon: any;
	title: string;
	text: string;
};

const MiniCard = ({ icon, title, text }: Props) => {
	return (
		<motion.div
			className='w-32 lg:w-80 bg-[#1D1D1F] rounded-lg p-2 lg:p-4 text-center space-y-2 hover:outline transition-all duration-300'
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<div className='w-full flex items-center justify-center'>
				<span className='lg:text-3xl xl:text-4xl text-2xl'>{icon}</span>
			</div>
			<h1 className='font-semibold lg:text-xl text-xs'>{title}</h1>
			<p className='text-[8px] lg:text-xs'>{text}</p>
		</motion.div>
	);
};

export default MiniCard;
