import { AiOutlineSearch } from 'react-icons/ai';

const HeroSection = () => (
	<section className='w-full h-screen relative'>
		<video
			className='w-full h-full object-cover'
			src='/assets/media/videos/beach.mp4'
			autoPlay
			loop
			muted
			controls={false}
		/>
		<div className='absolute left-0 top-0 w-full h-full bg-gray-900/50' />

		<div className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2'>
			<div className='container mx-auto flex flex-col items-center justify-center text-center text-white p-4 gap-4'>
				<h1>First Class Travel</h1>
				<h2 className='font-light'>Top 1% Locations Worldwide</h2>

				<form className='flex justify-between items-center gap-8 max-w-[700px] mx-auto w-full border py-1 px-2 rounded-md text-black bg-gray-100/90'>
					<input
						className='bg-transparent border-0 shadow-none flex-1 focus:outline-none'
						type='text'
						name='search'
						id='search'
						placeholder='Search Destinations'
					/>
					<button>
						<AiOutlineSearch
							className='icon !text-white'
							size={20}
						/>
					</button>
				</form>
			</div>
		</div>
	</section>
);

export { HeroSection };