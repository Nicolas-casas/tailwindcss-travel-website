import { BiMapPin } from 'react-icons/bi';

const SelectionSection = () => (
  <div className="px-4 py-8 md:px-0 md:py-8">
    <div className="container mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        aria-label="Maldives beach card"
        className='bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/maldives.jpg")]'
      >
        <div className="absolute bottom-8 left-8">
          <h3 className="text-xl font-bold text-white">Maldives</h3>
          <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
            <BiMapPin /> South Asia
          </span>
        </div>
      </div>
      <div
        aria-label="Bora Bora beach card"
        className='bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/borabora.jpg")]'
      >
        <div className="absolute bottom-8 left-8">
          <h3 className="text-xl font-bold text-white">Bora Bora</h3>
          <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
            <BiMapPin /> Island in French Polynesia
          </span>
        </div>
      </div>
      <div
        aria-label="Key West beach card"
        className='bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/keywest.jpg")]'
      >
        <div className="absolute bottom-8 left-8">
          <h3 className="text-xl font-bold text-white">Key West</h3>
          <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
            <BiMapPin /> Island in Florida
          </span>
        </div>
      </div>
    </div>
  </div>
);

export { SelectionSection };
