import Image from 'next/image';

const DestinationsSection = () => (
  <section className="px-4 py-8 md:px-0 md:py-16">
    <div className="container mx-auto text-center">
      <h2>Actividades en Mendoza</h2>
      <p>Disfruta de nuestras mas variadas actividades</p>

      <div className="grid grid-rows-none gap-2 pt-8 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
        <Image
          alt="Borabora"
          className="col-span-2 row-span-2 h-full w-full rounded object-cover shadow shadow-black/20 md:col-span-4 lg:col-span-3"
          height={1000}
          src="/assets/media/images/hiking.jpg"
          width={1000}
        />
        <Image
          alt="Borabora"
          className="h-full w-full rounded object-cover shadow shadow-black/20"
          height={1000}
          src="/assets/media/images/cabalgatas.jpg"
          width={1000}
        />
        <Image
          alt="Maldives"
          className="h-full w-full rounded object-cover shadow shadow-black/20"
          height={1000}
          src="/assets/media/images/degustacion.jpg"
          width={1000}
        />
        <Image
          alt="Maldives"
          className="h-full w-full rounded object-cover shadow shadow-black/20"
          height={1000}
          src="/assets/media/images/rafting.jpg"
          width={1000}
        />
        <Image
          alt="Maldives"
          className="h-full w-full rounded object-cover shadow shadow-black/20"
          height={1000}
          src="/assets/media/images/canopi.jpg"
          width={1000}
        />
      </div>
    </div>
  </section>
);

export { DestinationsSection };
