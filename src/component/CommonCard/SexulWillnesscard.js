import React from "react";
import AddToCartButton from "../CommonButton/AddToCartButton";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const SexulWillnesscard = () => {
  const products = [
    {
      id: "product1",
      name: "Bareback Ultra Condoms",
      description: "Antiseptic liquid",
      packSize: "Pack Size :3's",
      price: "Rs 280",
      discount: "10% Off",
      image: require("../../assets/SexulWillnesscard/barebok.webp"),
    },
    {
      id: "product2",
      name: "Durex Performa      ",
      description: "Powder",
      packSize: "Pack Size: 1x3's",
      price: "Rs 830.00      ",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/SexulWillnesscard/durex.png"),
    },
    {
      id: "product3",
      name: "Chamomilla Gripe Water",
      description: "powder",
      packSize: "Pack Size :3's",
      price: "Rs 930.00",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/SexulWillnesscard/skyn.png"),
    },
    {
      id: "product4",
      name: "Durex Extra Safe      ",
      description: "Spray",
      packSize: "Pack Size : 1x3's",
      price: "Rs 172",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/SexulWillnesscard/durexextra.png"),
    },
    {
      id: "product5",
      name: "Herbeast Supplements       ",
      description: "Capsule      ",
      packSize: "Pack Size :3's",
      price: "Rs 299",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/SexulWillnesscard/herbens.png"),
    },
    {
      id: "product6",
      name: "Lifestyles Classic Condoms     ",
      description: "Oil",
      packSize: "Pack Size :120ml",
      price: "Rs 704",
      originalPrice: 925,
      discount: "10% Off",

      image: require("../../assets/SexulWillnesscard/lifestyle.png"),
    },
    {
      id: "product7",
      name: "Rough Rider Studded       ",
      description: "Others      ",
      packSize: "Pack Size: 1      ",
      price: "Rs 3352      ",
      originalPrice: 925,
      discount: "10% Off",

      image: require("../../assets/SexulWillnesscard/roughrider.png"),
    },
    {
      id: "product8",
      name: "Lifestyles Classic       ",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 229",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/enfoma.webp"),
      image: require("../../assets/SexulWillnesscard/lifestyle.png"),
    },
    {
      id: "product9",
      name: "Bareback Ultra Condoms",
      description: "Antiseptic liquid",
      packSize: "Pack Size :5's",
      price: "Rs 759",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/SexulWillnesscard/barebok.webp"),
    },
    {
      id: "product10",
      name: " Herbeast Supplements    ",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/SexulWillnesscard/herbens.png"),
    },
    {
      id: "product11",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/enfoma.webp"),
    },
    {
      id: "product12",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "10% Off",
      image: require("../../assets/SexulWillnesscard/skyn.png"),
    },
  ];
  return (
    <div className="w-full p-4 flex-col sm:w-full bg-white  sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
      <Swiper spaceBetween={1} slidesPerView={3}
       breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
        1536: {
          slidesPerView: 6,
        },
      }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col  relative justify-center mx-2 border p-4 rounded-lg shadow  border-gray-200">
              <img
                className="sm:h-48 object-contain"
                src={item.image}
                alt={item.name}
              />
              <h1 className="mb-4 text-sm font-bold  text-black dark:text-gray-400">
                {item.name}
              </h1>
              <p>{item.description} </p>
              <p>{item.packSize} </p>
              <p className="text-xl text-black">{item.price}</p>
              <div className="bg-blue-300 w-fit rounded-sm absolute top-2 right-0">
                <span className="">{item.discount}</span>
              </div>
              <AddToCartButton />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SexulWillnesscard;
