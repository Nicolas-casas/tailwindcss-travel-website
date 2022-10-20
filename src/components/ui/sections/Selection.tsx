import { BiMapPin } from 'react-icons/bi';

const SelectionSection = () => (
	<div className='px-4 md:px-0 py-8 md:py-8'>
		<div className='container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
			<div
				className='min-h-[400px] bg-[url("/assets/media/images/maldives.jpg")] bg-image-zoom'
				aria-label='Maldives beach card'
			>
				<div className='absolute bottom-8 left-8'>
					<h3 className='text-xl text-white font-bold'>Maldives</h3>
					<span className='flex items-center gap-1 text-slate-200 text-sm mt-2'>
						<BiMapPin /> South Asia
					</span>
				</div>
			</div>
			<div
				className='min-h-[400px] bg-[url("/assets/media/images/borabora.jpg")] bg-image-zoom'
				aria-label='Bora Bora beach card'
			>
				<div className='absolute bottom-8 left-8'>
					<h3 className='text-xl text-white font-bold'>Bora Bora</h3>
					<span className='flex items-center gap-1 text-slate-200 text-sm mt-2'>
						<BiMapPin /> Island in French Polynesia
					</span>
				</div>
			</div>
			<div
				className='min-h-[400px] bg-[url("/assets/media/images/keywest.jpg")] bg-image-zoom'
				aria-label='Key West beach card'
			>
				<div className='absolute bottom-8 left-8'>
					<h3 className='text-xl text-white font-bold'>Key West</h3>
					<span className='flex items-center gap-1 text-slate-200 text-sm mt-2'>
						<BiMapPin /> Island in Florida
					</span>
				</div>
			</div>
		</div>
	</div>
);

export { SelectionSection };