import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";
import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeAbout />
      <Gallery />
      <FAQ />
      <HomeContact />
    </>
  );
}
