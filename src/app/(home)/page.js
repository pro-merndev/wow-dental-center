import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";
import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeAbout />
      <Testimonials />
      <Gallery />
      <FAQ />
      <HomeContact />
    </>
  );
}
