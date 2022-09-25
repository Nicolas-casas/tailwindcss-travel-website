import Image from 'next/future/image';

const DestinationsSection = () => (
	<div className='px-4 md:px-0 py-8 md:py-16'>
		<div className='container mx-auto text-center'>
			<h1>All-Inclusive Resorts</h1>
			<p>On the Caribbean&apos;s Best Beaches</p>

			<div
				className={
					'pt-8 grid grid-rows-none md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4'
				}
			>
				<Image
					width={1000}
					height={1000}
					className='h-full w-full object-cover col-span-2 md:col-span-4 lg:col-span-3 row-span-2 rounded shadow shadow-black/20'
					src='/assets/media/images/borabora.jpg'
					alt='Borabora'
				/>
				<Image
					width={1000}
					height={1000}
					className='h-full w-full object-cover rounded shadow shadow-black/20'
					src='/assets/media/images/borabora2.jpg'
					alt='Borabora'
				/>
				<Image
					width={1000}
					height={1000}
					className='h-full w-full object-cover rounded shadow shadow-black/20'
					src='/assets/media/images/maldives.jpg'
					alt='Maldives'
				/>
				<Image
					width={1000}
					height={1000}
					className='h-full w-full object-cover rounded shadow shadow-black/20'
					src='/assets/media/images/maldives2.jpg'
					alt='Maldives'
				/>
				<Image
					width={1000}
					height={1000}
					className='h-full w-full object-cover rounded shadow shadow-black/20'
					src='/assets/media/images/maldives3.jpg'
					alt='Maldives'
				/>
			</div>
		</div>
	</div>
);

export { DestinationsSection };
