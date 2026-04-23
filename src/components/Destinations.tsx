import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Destinations() {
  const destinations = [
    {
      name: "Venice",
      tours: 356,
      path: "/popular-destinations/Venice.png",
    },
    {
      name: "Amsterdam",
      tours: 356,
      path: "/popular-destinations/venice.png",
    },
    {
      name: "Budapest",
      tours: 356,
      path: "/popular-destinations/Budapest.png",
    },
    {
      name: "Lisbon",
      tours: 356,
      path: "/popular-destinations/Lisbon.png",
    },
    {
      name: "London",
      tours: 356,
      path: "/popular-destinations/London.png",
    },
    {
      name: "Ottawa",
      tours: 356,
      path: "/popular-destinations/Ottawa.png",
    },
    {
      name: "Paris",
      tours: 356,
      path: "/popular-destinations/Paris.png",
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-312 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-[clamp(28px,3.5vw,52px)] font-extrabold mb-2">
            Popular Destinations
          </h2>
          <p className="text-[#737373] font-medium text-xl">
            Favorite destinations based on customer reviews
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group border-2 border-[#E4E6E8] rounded-3xl p-4 transition-all bg-white"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden rounded-[18px]">
                <Image
                  src={destination.path}
                  alt={destination.name}
                  width={256}
                  height={202}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Footer */}
              <div className="mt-4 flex items-center justify-between px-1 pb-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {destination.name}
                  </h3>
                  <p className="text-sm font-normal text-[#737373]">
                    {destination.tours} Tours
                  </p>
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-slate-100">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Promo Card (The 8th item) */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#1344E5] px-5 py-9 text-white shadow-lg">
            <h3 className="text-2xl font-extrabold">
              Crafting Your <br />
              Perfect Travel <br />
              Experience
            </h3>

            <button className="mt-6 flex w-full items-center justify-between rounded-xl bg-brand-accent px-6.5 py-3 font-bold text-white transition">
              <span className="text-base font-bold text-start">Browse All destinations</span>
              <div className="rounded-full bg-white text-black p-2">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}