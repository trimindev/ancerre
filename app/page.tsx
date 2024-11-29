import Banner from "@/components/Home/Banner";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <FeaturedProducts />
    </div>
  );
}
