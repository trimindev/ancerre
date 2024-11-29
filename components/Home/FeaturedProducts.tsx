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
      colors: ["#111827", "#172554", "#c7955a", "#000000"],
    },
    {
      id: 2,
      name: "Freestanding Bathtub",
      oldPrice: "$799.99",
      newPrice: "$699.99",
      image: "/image/2.jpg",
      colors: [],
    },
    {
      id: 3,
      name: "LED Bathroom Mirror",
      oldPrice: "$299.99",
      newPrice: "$249.99",
      image: "/image/1.jpg",
      colors: ["#111827", "#c7955a", "#ffffff", "#000000"],
    },
    {
      id: 4,
      name: "Modern Bathroom Sink",
      oldPrice: "$199.99",
      newPrice: "$149.99",
      image: "/image/2.jpg",
      colors: ["#111827", "#172554", "#c7955a", "#ffffff", "#000000"],
    },
  ];

  return (
    <div className="py-6 sm:py-10 px-2 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-americana text-center mb-6 sm:mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="cursor-pointer">
            {/* Product Image */}
            <div className="relative w-full aspect-square rounded-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-1 sm:p-2">
              {/* Product Name and Price */}
              <h3 className="sm:text-lg font-americana font-bold">
                {product.name}
              </h3>

              <div className="flex justify-between items-center mt-1">
                {/* Product Price */}
                <div className="space-x-1">
                  <span className="text-xs text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                  <span className="text-sm font-medium text-neutral-950">
                    {product.newPrice}
                  </span>
                </div>

                {/* Color Indicators */}
                <div className="flex items-center justify-end h-4 -mr-1 sm:-mr-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full shadow-lg border-white border-[1px]`}
                      style={{
                        backgroundColor: color,
                        marginRight:
                          index === product.colors.length - 1 ? "0" : "-3px",
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
