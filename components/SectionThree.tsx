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
			className='flex flex-col items-center justify-center w-full h-screen gap-3 pt-16 snap-start lg:gap-8 xl:gap-10 xl:pt-28 '
		>
			<div
				className='flex flex-wrap items-center justify-center gap-4 lg:gap-8 xl:gap-12 xl:flex-nowrap '
				ref={sectionThree}
			>
				{/* uuid causing the card and minicard to rerender when not in viewport */}
				{cards.map(({ image, title, text }, index) => (
					<Card key={index} image={image} title={title} text={text} />
				))}
			</div>

			<div className='flex gap-8 xl:gap-10 '>
				{miniCards.map(({ icon, title, text }, index) => (
					<MiniCard key={index} icon={icon} title={title} text={text} />
				))}
			</div>
		</section>
	);
};

export default SectionThree;
