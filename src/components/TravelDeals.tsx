import Image from "next/image";

const storeButtons = [
  {
    id: "apple",
    eyebrow: "Download on the",
    title: "Apple Store",
    path: "/apple-store.png",
    ariaLabel: "Download on the Apple Store",
    width: 19.06,
    height: 25,
  },
  {
    id: "google-play",
    eyebrow: "Get in on",
    title: "Google Play",
    path: "/google-play.png",
    ariaLabel: "Get it on Google Play",
    width: 25.35,
    height: 25,
  },
];

export default function TravelDeals() {
  return (
    <section className="bg-[#0640C3] py-14 md:py-20 px-5 md:mx-15 my-14.5 relative overflow-hidden">
      <div className="max-w-312 mx-auto overflow-hidden">
        <div className="pointer-events-none absolute -top-65 -left-20 h-80 w-[320px] rounded-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.40)_50%,transparent_100%)] blur-[20px] md:h-107.5 md:w-107.5 lg:h-130 lg:w-130" />

        <div className="pointer-events-none absolute -bottom-65 -right-20 h-80 w-[320px] rounded-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.20)_0%,transparent_50%,transparent_0%)] blur-[5px] md:h-107.5 md:w-107.5 lg:h-130 lg:w-130" />

        <div className="relative z-10">
          <h2 className="max-w-170 text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.12] text-white">
            Find The Best Travel Deals Instantly With AI!
          </h2>

          <p className="mt-5 max-w-[677.53px] text-base text-white/75 font-normal mb-12.5">
            No more endless searching! Our AI scans thousands of travel packages
            to find you the best deals - Whether it&apos;s a budget getaway or a
            luxury escape, we&apos;ll match you with the best deal - instantly!
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            {storeButtons.map((store) => (
              <a
                key={store.id}
                href="#"
                aria-label={store.ariaLabel}
                className="inline-flex min-w-35 items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5"
              >
                <Image
                  src={store.path}
                  alt={store.eyebrow}
                  width={store.width}
                  height={store.height}
                />
                <span className="h-7 w-px bg-[#CFCFCF]" />
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] font-medium text-[#666666]">
                    {store.eyebrow}
                  </span>
                  <span className="mt-1 text-[17px] font-semibold text-black">
                    {store.title}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
