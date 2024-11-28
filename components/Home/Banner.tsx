import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[500px] md:h-[700px] w-full">
      {/* Background image*/}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image/banner.jpg"
          fill={true}
          alt="Banner"
          className="object-cover object-bottom"
        />
      </div>
      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-3xl md:text-5xl font-thin mb-4">
          Discover Your
          <br />
          <span>Dream Bathroom</span>
        </h1>

        <p className="text-sm md:text-base mb-6 max-w-xl">
          We create bathroom furniture with love and craftsmanship, turning your
          vision into a space you'll truly cherish.
        </p>

        <button className="bg-white text-neutral-950 px-8 py-2 rounded-3xl text-sm md:text-base font-medium hover:bg-neutral-100 transition">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Banner;
