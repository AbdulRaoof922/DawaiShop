import React from "react";
import AddToCartButton from "../CommonButton/AddToCartButton";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandCard = () => {
  const products = [
    {
      id: "product1",
      name: "Reckitt",

      image: require("../../assets/Brandcardimage/reckit.jpg"),
    },
    {
      id: "product2",
      name: "GSK Consumer Healthcare      ",
      image: require("../../assets/Brandcardimage/gsk.png"),
    },
    {
      id: "product3",
      name: "Nestle Everyday Tea      ",

      image: require("../../assets/Brandcardimage/getz.png"),
    },
    {
      id: "product4",
      name: "Rose Water 120      ",

      image: require("../../assets/Brandcardimage/marting.png"),
    },
    {
      id: "product5",
      name: "Searle",
      image: require("../../assets/Brandcardimage/searle.png"),
    },
    {
      id: "product6",
      name: "d'Naturals",
      image: require("../../assets/Brandcardimage/naturals.png"),
    },
    {
      id: "product7",
      name: "Hilton ",

      image: require("../../assets/Brandcardimage/hilton.jpeg"),
    },
    {
      id: "product8",
      name: "Mead Johnsons Nutrition      ",
      image: require("../../assets/Brandcardimage/enfa.png"),
    },
    {
      id: "product9",
      name: "Novartis      ",

      image: require("../../assets/Brandcardimage/novarts.jpeg"),
    },
    {
      id: "product10",
      name: "Abbott Nutrition",

      image: require("../../assets/Brandcardimage/abbott.png"),
    },
    {
      id: "product11",
      name: "Sami",

      image: require("../../assets/Brandcardimage/sami.jpeg"),
    },
    {
      id: "product12",
      name: "Dettol 500ml",

      image: require("../../assets/Brandcardimage/abbott.png"),
    },
  ];
  return (
    <div className="w-full p-4 flex-col sm:w-full bg-white  sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
      <Swiper spaceBetween={4} slidesPerView={2} breakpoints={{
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
        }}>
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex  flex-col sm:h-34 sm:w-full rounded-lg shadow  items-center justify-center mx:6 border p-4 border-gray-200">
              <img
                className="sm:h-10 sm:w-14"
                src={item.image}
                alt={item.name}
              />
              <p className="text-sm   text-blue-900  dark:text-gray-400 mt-2">
                {item.name}
              </p>
              <p>{item.description} </p>
              <p>{item.packSize} </p>
              <p className="text-xl text-black">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCard;
