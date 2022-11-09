import React from 'react';

type Props = {
	image: string;
	text: string;
};

const ImageText = ({ image, text }: Props) => {
	return (
		<div className='space-y-4  w-32 h-32 md:w-36 md:h-36 lg:w-32 lg:h-32 xl:w-52 xl:h-44 '>
			<img src={image} alt='' className='h-10 md:h-14 xl:h-16' />
			<h1 className='font-semibold lg:text-sm xl:text-2xl break-words w-full'>
				{text}
			</h1>
		</div>
	);
};

export default ImageText;
