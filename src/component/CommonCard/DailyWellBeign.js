import React from "react";
import AddToCartButton from "../CommonButton/AddToCartButton";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const DailyWellBeign = () => {
  const products = [
    {
      id: "product1",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product2",
      name: "Nestle Nido 1+ Milk",
      description: "Powder",
      packSize: "Pack Size: 375 gm      ",
      price: "Rs 830.00      ",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/kalvi.png"),
    },
    {
      id: "product3",
      name: "Nestle Everyday Tea      ",
      description: "powder",
      packSize: "Pack Size :375gm",
      price: "Rs 830.00",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/sensofyne.webp"),

    },
    {
      id: "product4",
      name: "Rose Water 120      ",
      description: "Spray",
      packSize: "Pack Size :120ml",
      price: "Rs 172",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/versus.webp"),

    },
    {
      id: "product5",
      name: "Coconut Oil 120ml Bottle",
      description: "Oil",
      packSize: "Pack Size :120ml",
      price: "Rs 299",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/vitamin.png"),

    },
    {
      id: "product6",
      name: "Almond Oil 120 ml Bottle      ",
      description: "Oil",
      packSize: "Pack Size :120ml",
      price: "Rs 704",
      originalPrice: 925,
      discount: "5% Off",
      
      image: require("../../assets/DailyRoutineCard/versusashwaga.webp"),

    },
    {
      id: "product7",
      name: "First Aid Box      ",
      description: "Others      ",
      packSize: "Pack Size: 1      ",
      price: "Rs 3352      ",
      originalPrice: 925,
      discount: "5% Off",
      
      image: require("../../assets/DailyRoutineCard/versusohmygut.webp"),

    },
    {
      id: "product8",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 229",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/enfoma.webp"),
      image: require("../../assets/DailyRoutineCard/strepsils.webp"),
    },  {
      id: "product9",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/enfoma.webp"),
    },  {
      id: "product10",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/versusohmygut.webp"),

    },  {
      id: "product11",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/enfoma.webp"),
    },  {
      id: "product12",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),

    },
  ];
  return (
    <div className="w-full p-4 flex-col sm:w-full bg-white  sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">

        <Swiper
        spaceBetween={1} 
        slidesPerView={2}
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
              <img className="sm:h-48 object-contain"  src={item.image} alt={item.name} /> 
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
 

export default DailyWellBeign;