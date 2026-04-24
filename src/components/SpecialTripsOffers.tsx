"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SpecialTripsOffers() {
  // Initialize Embla with loop disabled and start alignment
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const offers = [
    {
      id: 1,
      type: "info",
      title: "We Make Every Trips Special",
      titleClass: "text-white max-w-46.25 mb-[15px]",
      image: "/trips-offers/tours1.png",
      divClass: "absolute right-4 bottom-7.5",
      btnClass: "bg-[#FFB703] text-black",
      btnDivClass: "flex justify-end",
    },
    {
      id: 2,
      type: "offer",
      label: "Limited Offers",
      labelClass: "",
      title: "Buy 1, Get 1 Free Attractions",
      titleClass: "max-w-[186.64px] mb-[23px] mt-2",
      image: "/trips-offers/tours2.png",
      divClass: "absolute bottom-7.5 left-[30px]",
      btnClass: "bg-[#0640C3]",
    },
    {
      id: 3,
      type: "offer",
      label: "Limited Offers",
      labelClass: "bg-white rounded-[4px] px-[11px] py-[8px] inline-block",
      title:
        "<span class='bg-white pt-2.25 pb-1 px-2.75 rounded-sm mb-1 inline-block'>Buy 1, Get 1 Free</span><br/><span class='bg-white px-2 py-1 rounded-sm inline-block w-full'>Attractions</span>",
      titleClass: "rounded-[4px] mt-1 mb-[5px] text-xl",
      image: "/trips-offers/tours3.png",
      divClass: "absolute bottom-[30px] left-[30px]",
      btnClass: "bg-[#FFB703]",
    },
  ];

  return (
    <section className="relative w-full py-12">
      <div className="relative max-w-306 mx-auto px-4 md:px-6 flex items-center group">
        {/* Navigation - Left Button */}
        <button
          onClick={scrollPrev}
          className="absolute hidden md:block md:-left-12 z-20 p-3 rounded-full bg-[#E4E6E8]"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-7.5">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="flex-[0_0_99%] min-w-0 sm:flex-[0_0_48%] lg:flex-[0_0_305] xl:flex-[0_0_372px]"
              >
                <div
                  className={`relative rounded-2xl overflow-hidden flex flex-col justify-end group/card`}
                >
                  <div className="inset-0 z-0">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      width={388}
                      height={232}
                      className="object-cover"
                      priority={offer.id === 1}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className={`${offer.divClass && offer.divClass}`}>
                    {offer.label && (
                      <span
                        className={`text-base font-bold ${offer.labelClass}`}
                      >
                        {offer.label}
                      </span>
                    )}
                    <h3
                      className={`text-2xl font-extrabold ${offer.titleClass}`}
                      dangerouslySetInnerHTML={{ __html: offer.title }}
                    />

                    <div
                      className={`${offer.btnDivClass && offer.btnDivClass}`}
                    >
                      <button
                        className={`flex items-center gap-2 px-6 py-2.75 text-white rounded-full text-[12px] font-bold ${offer.btnClass}`}
                      >
                        View More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation - Right Button */}
        <button
          onClick={scrollNext}
          className="absolute hidden xl:block md:-right-12 z-20 p-3 rounded-full bg-[#E4E6E8]"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
