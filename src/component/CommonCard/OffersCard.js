import React from "react";
import AddToCartButton from "../CommonButton/AddToCartButton";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const OffersCard = () => {
  const products = [
    {
      id: "product1",
      description:
        "Get up to 25% off medicines when you pay through Habib Metro Cards.",
      image: require("../../assets/OffersCardImage/meezan.png"),
    },
    {
      id: "product2",
      description: "Get flat 20% off only on Fridays with Meezan Bank Credit.",

      image: require("../../assets/OffersCardImage/hblbank.png"),
    },
    {
      id: "product3",
      description: "Get 15% off all products and 20% off medicines using . ",

      image: require("../../assets/OffersCardImage/habibmetro.png"),
    },
    {
      id: "product4",
      description: "Get 25% off on Visa Signature Credit Card and 15% off.",

      image: require("../../assets/OffersCardImage/silkbank.png"),
    },
    {
      id: "product5",
      description:
        "Get discounts of up to 15% on every item added to your cart. ",

      image: require("../../assets/OffersCardImage/dawaiimg.png"),
    },
  ];
  return (
    <div className="w-full sm:w-full  sm:p-4 flex-col  bg  dark:bg-gray-800 dark:border-gray-700  ">
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
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
            <div className="flex mx-10 sm:h-28 h-full w-full sm:w-full  rounded-lg  items-center   border-dotted border  p-4 ">
              <img
                className="sm:h-2/4 w-1/4 h-1/4 sm:w-1/4 "
                src={item.image}
                alt={item.name}
              />

              <p className="text-sm font-mono  sm:pl-4 ml-4  ">
                {item.description}{" "}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OffersCard;
