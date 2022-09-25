import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaPinterest,
	FaYoutube,
} from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMobileMenu = () => setIsOpen((prev) => !prev);

	return (
		<header className='flex justify-center items-center h-20 px-4 lg:px-0 absolute z-10 top-0 text-white w-full'>
			<section className='container mx-auto flex justify-between items-center gap-4'>
				<span className='uppercase text-3xl md:text-4xl font-bold font-roboto-condensed'>
					Beaches.
				</span>

				<nav className='hidden md:flex items-center md:gap-6 gap-3'>
					<span>Home</span>
					<span>Destinations</span>
					<span>Travel</span>
					<span>View</span>
					<span>Book</span>
				</nav>

				<div className='hidden md:flex items-center gap-2'>
					<BiSearch size={20} />
					<BsPerson size={20} />
				</div>

				<div className='md:hidden'>
					<HiOutlineMenuAlt4
						size={20}
						className='cursor-pointer'
						onClick={handleMobileMenu}
					/>
				</div>
			</section>
			<div
				className={`absolute ${
					isOpen ? 'left-0' : '-left-[100%]'
				} top-0 w-full h-screen bg-gray-100 px-4 py-6 flex flex-col gap-4 text-black`}
			>
				<section className='flex justify-between items-center'>
					<span className='uppercase text-3xl md:text-4xl font-bold font-roboto-condensed'>
						Beaches.
					</span>

					<AiOutlineClose
						size={20}
						className='cursor-pointer'
						onClick={handleMobileMenu}
					/>
				</section>

				<nav className='flex flex-col gap-4 text-xl'>
					<span className='p-2 border-b border-b-slate-500'>
						Home
					</span>
					<span className='p-2 border-b border-b-slate-500'>
						Destinations
					</span>
					<span className='p-2 border-b border-b-slate-500'>
						Travel
					</span>
					<span className='p-2 border-b border-b-slate-500'>
						View
					</span>
					<span className='p-2 border-b border-b-slate-500'>
						Book
					</span>
				</nav>

				<section className='flex flex-col gap-4'>
					<button>Search</button>
					<button>Account</button>
				</section>

				<section className='flex items-center justify-center gap-6'>
					<FaFacebook className='icon' />
					<FaTwitter className='icon' />
					<FaInstagram className='icon' />
					<FaPinterest className='icon' />
					<FaYoutube className='icon' />
				</section>
			</div>
		</header>
	);
};

export { Header };
