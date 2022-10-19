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
		<section className='px-4 md:px-0 py-8 md:py-8'>
			<div className='container mx-auto relative flex justify-center items-center'>
				<span
					className='flex items-center justify-center bg-white/75 text-slate-800 rounded-full p-2 absolute top-1/2 left-8 text-3xl leading-none cursor-pointer'
					onClick={handlePrevSlide}
				>
					<BsChevronLeft />
				</span>
				<span
					className='flex items-center justify-center bg-white/75 text-slate-800 rounded-full p-2 absolute top-1/2 right-8 text-3xl leading-none cursor-pointer'
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
								className='w-full h-[750px] object-cover object-bottom rounded-md shadow shadow-black/20'
								src={item.url}
								width={1000}
								height={1000}
								alt='beach image'
							/>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export { CarouselSection };