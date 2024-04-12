import Popup from "@/components/common/Popup/Popup";
import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";
import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";
import Testimonials from "@/components/home/Testimonials";
import Welcome from "@/components/home/Welcome";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <Banner />
      <Popup />
      <HomeAbout />
      <Welcome />
      <WhatWeDo />
      <Testimonials />
      <Gallery />
      <FAQ />
      <HomeContact />
    </>
  );
}
