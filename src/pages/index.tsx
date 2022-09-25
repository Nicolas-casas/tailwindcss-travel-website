import { Header } from 'components/ui/Header';
import { DestinationsSection } from 'components/ui/sections/Destination';
import { RatesSection } from 'components/ui/sections/Rates';
import { HeroSection } from 'components/ui/sections/Hero';
import type { NextPage } from 'next';
import { SelectionSection } from 'components/ui/sections/Selection';

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<DestinationsSection />
			<RatesSection />
			<SelectionSection />
		</>
	);
};

export default Home;
