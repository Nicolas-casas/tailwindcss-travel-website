import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube,} from 'react-icons/fa';

const Footer = () => (
    <footer className='px-4 md:px-0 py-8 md:py-16 bg-gray-100'>
        <div className='container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between gap-4'>
            <span className='uppercase text-3xl md:text-4xl font-bold font-roboto-condensed'>
                Beaches.
            </span>

            <section className='flex items-center flex-wrap justify-center gap-6'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaPinterest className='icon'/>
                <FaYoutube className='icon'/>
            </section>

        </div>
    </footer>
);

export {Footer};