import Image from 'next/image';
import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative isolate scroll-mt-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.32),transparent_35%)]" />
      </div>

      <div className="relative flex min-h-160 flex-col items-center px-4 pb-28 pt-32 text-center sm:px-6 sm:pt-36 lg:min-h-180 lg:pb-32 lg:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5.75 py-3.75 text-base font-bold text-white">
          <Image src="/earth.png" alt="earth icon" width={24} height={24} />
          Explore the world
        </div>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-5">
          Your Gateway to Extraordinary Adventures
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-white sm:text-base lg:text-2xl font-medium">
          Pack your bags and let Travila redefine your travel experience. Where
          every journey is a story waiting to be told
        </p>
      </div>
    </section>
  );
}
