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
			className='w-32 lg:w-80'
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1, delay: 1 }}
			viewport={{ once: true }}
		>
			<div className='w-full h-full  bg-[#1D1D1F] rounded-lg p-2 lg:p-4 text-center space-y-2 hover:scale-105 cursor-pointer transition-all duration-300'>
				<div className='flex items-center justify-center w-full'>
					<span className='text-2xl lg:text-3xl xl:text-4xl'>{icon}</span>
				</div>
				<h1 className='text-xs font-semibold lg:text-xl'>{title}</h1>
				<p className='text-[8px] lg:text-xs'>{text}</p>
			</div>
		</motion.div>
	);
};

export default MiniCard;
