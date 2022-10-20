import Image from 'next/future/image';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const CarouselSection = () => {
	const [slide, setSlide] = useState(0);

	const SLIDER_DATA = [
		{
			url: '/assets/media/images/borabora.jpg',
		},
		{
			url: '/assets/media/images/borabora2.jpg',
		},
		{
			url: '/assets/media/images/maldives.jpg',
		},
		{
			url: '/assets/media/images/keywest.jpg',
		},
	];

	const handlePrevSlide = () =>
		setSlide((prevIndex) =>
			prevIndex === 0 ? SLIDER_DATA.length - 1 : prevIndex - 1
		);
	const handleNextSlide = () =>
		setSlide((prevIndex) =>
			prevIndex === SLIDER_DATA.length - 1 ? 0 : prevIndex + 1
		);

	return (
			<section className='relative flex justify-center items-center'>
				<span
					className='flex items-center justify-center bg-white/75 text-slate-800 rounded-full p-2 absolute top-1/2 left-4 lg:left-8 text-xl lg:text-3xl leading-none cursor-pointer'
					onClick={handlePrevSlide}
				>
					<BsChevronLeft />
				</span>
				<span
					className='flex items-center justify-center bg-white/75 text-slate-800 rounded-full p-2 absolute top-1/2 right-4 lg:right-8 text-xl lg:text-3xl leading-none cursor-pointer'
					onClick={handleNextSlide}
				>
					<BsChevronRight />
				</span>
				{SLIDER_DATA.map((item, index) => (
					<div
						key={index}
						className={`w-full rounded-md ${
							index !== slide && 'hidden'
						}`}
					>
						{index === slide && (
							<Image
								className='w-full h-[400px] lg:h-[750px] object-cover object-bottom shadow shadow-black/20'
								src={item.url}
								width={1000}
								height={1000}
								alt='beach image'
							/>
						)}
					</div>
				))}
			</section>
	);
};

export { CarouselSection };