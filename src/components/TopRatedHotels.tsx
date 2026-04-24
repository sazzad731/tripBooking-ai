"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, MapPin, Star } from "lucide-react";

const topRatedHotels = [
  {
    id: 1,
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    price: "$48.25",
    image: "/featured-tours/featured1.png",
  },
  {
    id: 2,
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    price: "$17.32",
    image: "/featured-tours/featured2.png",
  },
  {
    id: 3,
    title: "Grand Canyon Horseshoe Bend 2 days",
    location: "Manchester, England",
    price: "$15.63",
    image: "/featured-tours/featured3.png",
  },
  {
    id: 4,
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    price: "$48.25",
    image: "/featured-tours/featured1.png",
  },
];

export default function TopRatedHotels() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      className="overflow-hidden py-16 md:py-20"
      style={{
        backgroundImage: "url('/top-rated-hotels-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-312 mx-auto px-4 md:px-6">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <h2 className="text-[clamp(28px,3.5vw,52px)] font-extrabold leading-tight text-black">
              Top Rated Hotels
            </h2>
            <p className="mt-2 text-base font-medium text-[#737373] md:text-xl">
              Quality as judged by customers. Book at the ideal price!
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="View previous hotels"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="View next hotels"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6">
            {topRatedHotels.map((hotel) => (
              <article
                key={hotel.id}
                className="min-w-0 flex-[0_0_86%] sm:flex-[0_0_58%] lg:flex-[0_0_31.5%]"
              >
                <div className="group h-full rounded-[30px] bg-white/70 shadow-[0_24px_60px_rgba(38,73,110,0.12)] backdrop-blur-[1px]">
                  <div className="relative aspect-10/8 overflow-hidden rounded-[30px]">
                    <Image
                      src={hotel.image}
                      alt={hotel.title}
                      fill
                      sizes="(max-width: 640px) 86vw, (max-width: 1024px) 58vw, 32vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="relative z-10 -mt-10 rounded-[28px] bg-white px-5 pb-5 pt-6 md:px-6">
                    <h3 className="min-h-16 text-[20px] font-extrabold leading-snug text-[#111111]">
                      {hotel.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-sm font-medium text-[#8D8D8D]">
                        <MapPin className="h-4 w-4 text-[#C4C4C4]" />
                        <span>{hotel.location}</span>
                      </div>

                      <div className="flex items-center gap-0.5 text-brand-accent">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-3.5 w-3.5 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-4">
                      <p className="flex items-end gap-1">
                        <span className="text-[32px] font-extrabold leading-none text-[#111111]">
                          {hotel.price}
                        </span>
                        <span className="pb-1 text-sm font-medium text-[#737373]">
                          / person
                        </span>
                      </p>

                      <button
                        type="button"
                        className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-primary-deep cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 md:hidden">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="View previous hotels"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#64748B] shadow-[0_10px_24px_rgba(54,84,120,0.12)] transition hover:bg-[#F8FAFC] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="View next hotels"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#64748B] shadow-[0_10px_24px_rgba(54,84,120,0.12)] transition hover:bg-[#F8FAFC] cursor-pointer"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
