import Image from "next/image";

const sponsorLogos = [
  {
    id: "paypal",
    name: "PayPal",
    src: "/company/paypal.png",
    width: 107,
    height: 26,
  },
  {
    id: "stripe",
    name: "Stripe",
    src: "/company/stripe.png",
    width: 79,
    height: 34,
  },
  {
    id: "payoneer",
    name: "Payoneer",
    src: "/company/payoneer.png",
    width: 143,
    height: 24,
  },
  {
    id: "visa",
    name: "Visa",
    src: "/company/visa.png",
    width: 110,
    height: 26,
  },
  {
    id: "cashapp",
    name: "Cash App",
    src: "/company/cashapp.png",
    width: 116,
    height: 28,
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    src: "/company/bitcoin.png",
    width: 108,
    height: 24,
  },
  {
    id: "discover",
    name: "Discover",
    src: "/company/discover.png",
    width: 113,
    height: 20,
  },
];

export default function Sponsore() {
  return (
    <section className="relative overflow-hidden border-y border-[#E9EEF5] bg-white py-10 md:py-12 mb-14.5 mt-12.75">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(21,71,212,0.08),transparent)]" />
      <div className="max-w-294.75 mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-8 md:gap-x-10 lg:gap-x-12">
          {sponsorLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex min-h-10 items-center justify-center opacity-95 transition hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-auto w-auto max-h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
