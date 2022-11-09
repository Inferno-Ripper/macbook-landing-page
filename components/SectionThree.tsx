import React, { useEffect } from 'react';
import Card from './Card';
import MiniCard from './MiniCard';
import { useInView } from 'react-intersection-observer';
import { cards, miniCards } from '../data';

type Props = {
	setActiveScrollPillY: React.Dispatch<React.SetStateAction<string>>;
	scrollPositionY: number;
};
const SectionThree = ({ setActiveScrollPillY, scrollPositionY }: Props) => {
	const { ref: sectionThree, inView: sectionThreeInView } = useInView();

	useEffect(() => {
		if (sectionThreeInView) {
			setActiveScrollPillY('section-three');
		}
	}, [scrollPositionY]);

	return (
		<section
			id='section-three'
			className='h-screen snap-start w-full flex flex-col items-center justify-center gap-3 lg:gap-8 xl:gap-10 pt-16 xl:pt-28 '
		>
			<div
				className='flex gap-4 lg:gap-8 xl:gap-12 justify-center  flex-wrap xl:flex-nowrap'
				ref={sectionThree}
			>
				{cards.map(({ image, title, text }) => (
					<Card image={image} title={title} text={text} />
				))}
			</div>

			<div className='flex gap-8 xl:gap-10 '>
				{miniCards.map(({ icon, title, text }) => (
					<MiniCard icon={icon} title={title} text={text} />
				))}
			</div>
		</section>
	);
};

export default SectionThree;
