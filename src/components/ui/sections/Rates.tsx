import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const RatesSection = () => (
	<div className='px-4 md:px-0 py-8 md:py-16'>
		<div className='container mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12'>
			<div className='lg:col-span-2 flex flex-col gap-6'>
				<div>
					<h2 className='uppercase font-medium'>
						Luxury Included Vacations For{' '}
						<strong>Two People</strong>
					</h2>
					<p className={'mt-2'}>
						Ut reprehenderit maiores. Voluptas quod labore facere
						dolorem rerum doloribus modi dolorem molestiae. Quis
						autem odit voluptatem voluptatem nemo odit quis sed qui.
						Aliquid ut voluptatem illum praesentium rem omnis sed.
						Eveniet architecto pariatur earum non necessitatibus.
						Labore quidem doloremque explicabo aut. Eius ea dolore.
						Harum aperiam qui culpa excepturi provident sunt. Maxime
						eum nostrum consequatur consectetur. Accusamus hic a
						rerum ad modi eaque aut natus. Aliquid velit autem
						voluptas et.
					</p>
					<p className={'mt-2'}>
						Ut reprehenderit maiores. Voluptas quod labore facere
						dolorem rerum doloribus modi dolorem molestiae. Quis
						autem odit voluptatem voluptatem nemo odit quis sed qui.
						Aliquid ut voluptatem illum praesentium rem omnis sed.
						Eveniet architecto pariatur earum non necessitatibus.
						Labore quidem doloremque explicabo aut. Eius ea dolore.
						Harum aperiam qui culpa excepturi provident sunt. Maxime
						eum nostrum consequatur consectetur. Accusamus hic a
						rerum ad modi eaque aut natus. Aliquid velit autem
						voluptas et.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8 pt-4'>
					<div className='flex items-center gap-6'>
						<span className='p-4 border bg-gradient-to-r from-brand-dark to-brand-light rounded-md text-white'>
							<RiCustomerService2Fill size={40} />
						</span>

						<div>
							<h3 className='uppercase'>Leading Service</h3>
							<p className='uppercase'>
								All-inclusive company for 20 years in-a-row
							</p>
						</div>
					</div>

					<div className='flex items-center gap-6'>
						<span className='p-4 border bg-gradient-to-r from-brand-dark to-brand-light rounded-md text-white'>
							<MdOutlineTravelExplore size={40} />
						</span>

						<div>
							<h3 className='uppercase'>Automated Bookings</h3>
							<p className='uppercase'>
								All-inclusive company for 20 years in-a-row
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-8'>
				<div className='w-full text-center border border-slate-300 px-4 py-8 rounded flex flex-col gap-2'>
					<p className='uppercase'>Get An Additional 10% off</p>
					<p className='uppercase text-2xl'>
						<strong>12 hours left</strong>
					</p>
					<p className='bg-black text-white uppercase py-2 px-4'>
						Book now and save
					</p>
				</div>

				<form className='flex flex-col gap-3 w-full'>
					<div className='flex flex-col gap-1'>
						<label
							className='text-sm text-slate-500 uppercase font-semibold'
							htmlFor='destination'
						>
							Destination
						</label>
						<select
							className='border rounded-d p-2 '
							name='destination'
							id='destination'
						>
							<option value='Grande Antigua'>
								Grande Antigua
							</option>
							<option value='Key West'>Key West</option>
							<option value='Maldives'>Maldives</option>
							<option value='Cozumel'>Cozumel</option>
						</select>
					</div>

					<div className='flex flex-col gap-1'>
						<label
							className='text-sm text-slate-500 uppercase font-semibold'
							htmlFor='check-in'
						>
							{' '}
							Check-in
						</label>
						<input
							className='border rounded-d p-2 '
							type='date'
							name='check-in'
							id='check-in'
						/>
					</div>

					<div className='flex flex-col gap-1'>
						<label
							className='text-sm text-slate-500 uppercase font-semibold'
							htmlFor='check-out'
						>
							{' '}
							Check-out
						</label>
						<input
							className='border rounded-d p-2 '
							type='date'
							name='check-out'
							id='check-out'
						/>
					</div>

					<button className='w-full'>Rates & Availabilities</button>
				</form>
			</div>
		</div>
	</div>
);

export { RatesSection };
