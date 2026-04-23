import Image from 'next/image'
import React from 'react'
import { SearchPanel } from './Search';

export default function TrustedBy() {
  
  const trustedBy = [
    { name: "Casa", src: "/trusted-by/casa.png", width: 100, height: 14 },
    { name: "egyptair", src: "/trusted-by/egyptair.png", width: 100, height: 12 },
    { name: "Cubana", src: "/trusted-by/cubana.png", width: 100, height: 52 },
    { name: "Delta", src: "/trusted-by/delta.png", width: 100, height: 56 },
    { name: "ATA", src: "/trusted-by/ata.png", width: 100, height: 26 },
    { name: "WestJet", src: "/trusted-by/westJet.png", width: 100, height: 56 },
    { name: "ABX", src: "/trusted-by/abx.png", width: 100, height: 56 },
  ];
  return (
    <section className="bg-[#E8ECF9] pt-16 pb-14 lg:pt-24 z-10 px-4">
      <SearchPanel/>
      <div className="max-w-306 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:items-center">
          <div className="max-w-sm">
            <p className="text-2xl font-extrabold">Trusted by</p>
            <p className="mt-3 text-[12px] text-[#737373]">
              We are a trusted partner of airlines, payment gateways, and travel
              companies around the world.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-7">
            {trustedBy.map((logo) => (
              <div
                key={logo.name}
                className="flex min-h-14 items-center justify-center rounded-[10px] border-2 border-[#D6D7D8] bg-white px-4.5 py-7.5"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-7 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
