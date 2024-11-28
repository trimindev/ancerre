import Banner from "@/components/Home/Banner";
import FeaturedProducts from "@/components/Home/FeaturedProducts";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Banner />
      <FeaturedProducts />
    </div>
  );
}
