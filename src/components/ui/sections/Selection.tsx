import { BiMapPin } from 'react-icons/bi';

const SelectionSection = () => (
	<div className='px-4 md:px-0 py-8 md:py-16'>
		<div className='container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
			<div className='min-h-[400px] bg-maldives bg-image-zoom'>
				<div className='absolute bottom-8 left-8 '>
					<h3 className='text-xl text-white font-bold'>Maldives</h3>
					<span className='flex items-center gap-1 text-slate-200 text-sm mt-2'>
						<BiMapPin /> South Asia
					</span>
				</div>
			</div>
			<div className='min-h-[400px] bg-borabora bg-image-zoom'>
				<div className='absolute bottom-8 left-8 '>
					<h3 className='text-xl text-white font-bold'>Bora Bora</h3>
					<span className='flex items-center gap-1 text-slate-200 text-sm mt-2'>
						<BiMapPin /> Island in French Polynesia
					</span>
				</div>
			</div>
			<div className='min-h-[400px] bg-keywest bg-image-zoom'>
				<div className='absolute bottom-8 left-8 '>
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
