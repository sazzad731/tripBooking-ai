import Destinations from "@/components/Destinations";
import FeaturedTours from "@/components/FeaturedTours";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustedBy />
      <Destinations />
      <FeaturedTours/>
    </>
  );
}
