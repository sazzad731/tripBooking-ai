"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  User,
} from "lucide-react";
import Image from "next/image";

export default function FeaturedTours() {
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

  const featuredTours = [
    {
      badge: "Top Rated",
      badgeClassName: "bg-white text-brand-accent",
      title: "California Sunset/Twilight Boat Cruise",
      location: "Manchester, England",
      duration: "2 days 3 nights",
      guests: "4-6 guest",
      price: "$48.25",
      image:
        "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=500&auto=format&fit=crop",
    },
    {
      badge: "Best Sale",
      badgeClassName: "bg-white text-[#3DC262]",
      title: "NYC: Food Tastings and Culture Tour",
      location: "Manchester, England",
      duration: "3 days 3 nights",
      guests: "4-6 guest",
      price: "$17.32",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=500&auto=format&fit=crop",
    },
    {
      badge: "25% Off",
      badgeClassName: "bg-white text-brand-accent",
      title: "Grand Canyon Horseshoe Bend 2 days",
      location: "Manchester, England",
      duration: "7 days 6 nights",
      guests: "4-6 guest",
      price: "$15.63",
      image:
        "https://images.unsplash.com/photo-1474433188271-d3f339f41911?q=80&w=500&auto=format&fit=crop",
    },
    {
      badge: "New",
      badgeClassName: "bg-white text-blue-500",
      title: "Swiss Alps Adventure",
      location: "Zermatt, Switzerland",
      duration: "5 days 4 nights",
      guests: "2-4 guest",
      price: "$89.00",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-312 mx-auto px-4 md:px-6">
        {/* Header with Navigation */}
        <div className="flex items-end justify-between mb-10 px-2">
          <div>
            <h2 className="text-[clamp(28px,3.5vw,52px)] font-extrabold">
              Our Featured Tours
            </h2>
            <p className="text-[#737373] font-medium text-xl">
              Favorite destinations based on customer reviews
            </p>
          </div>

          <div className="sm:flex gap-2 hidden">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full bg-[#E4E6E8] cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full bg-[#E4E6E8] cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Embla Container */}
          <div className="flex gap-6.25">
            {featuredTours.map((tour, index) => (
              /* Embla Slide */
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_31.33%]"
              >
                <div className="group flex flex-col rounded-4xl border border-[#E4E6E8] bg-white transition-all duration-300 h-full max-w-98">
                  {/* Image Section */}
                  <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      width={392}
                      height={326}
                      className="h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-4 py-1.5 text-sm font-bold ${tour.badgeClassName}`}
                    >
                      {tour.badge}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col -mt-14 z-10 bg-white rounded-4xl p-8">
                    <h3 className="text-2xl font-extrabold">{tour.title}</h3>

                    <div className="mt-2 flex items-center gap-1.5 text-[#737373]">
                      <MapPin className="w-4 h-4" />
                      <span className="text-base font-medium">
                        {tour.location}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-5 border-b border-slate-100 pb-6 text-[#737373]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span className="text-base font-medium">
                          {tour.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span className="text-base font-medium">
                          {tour.guests}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-extrabold">
                          {tour.price}
                        </span>
                        <span className="text-base font-medium text-[#737373]">
                          {" "}
                          / person
                        </span>
                      </div>
                      <button className="rounded-full bg-brand-primary px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-primary-deep cursor-pointer">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center mt-5 sm:hidden">
          <button
            onClick={scrollPrev}
            className="p-4 rounded-full bg-[#E4E6E8] cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="p-4 rounded-full bg-[#E4E6E8] cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}