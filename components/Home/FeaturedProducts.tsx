import Image from "next/image";
import React from "react";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Bathroom Vanity",
      oldPrice: "$499.99",
      newPrice: "$399.99",
      image: "/image/1.jpg",
      colors: ["#FF5733", "#33FF57", "#3357FF"],
    },
    {
      id: 2,
      name: "Freestanding Bathtub",
      oldPrice: "$799.99",
      newPrice: "$699.99",
      image: "/image/2.jpg",
      colors: ["#FF5733", "#33FF57"],
    },
    {
      id: 3,
      name: "LED Bathroom Mirror",
      oldPrice: "$299.99",
      newPrice: "$249.99",
      image: "/image/1.jpg",
      colors: ["#FF5733", "#3357FF", "#33FF57", "#F1C40F"],
    },
  ];

  return (
    <div className="py-16 px-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              {/* Product Name and Price */}
              <h3 className="text-xl font-semibold">{product.name}</h3>

              <div className="flex justify-between">
                {/* Product Price */}
                <div className="flex items-center mt-2 space-x-2">
                  <span className="text-lg text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                  <span className="text-xl font-bold text-neutral-950">
                    {product.newPrice}
                  </span>
                </div>
                {/* Color Indicators */}
                <div className="relative flex items-center mt-4">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full absolute"
                      style={{
                        backgroundColor: color,
                        right: `${index * 12}px`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
