import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AddToCartButton from "./../../component/CommonButton/AddToCartButton";
import Header from "../../component/Header/Header";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const LifeStyleCategory = () => {
  const products = [
    {
      id: "product1",
      name: "Sarang Chia Seeds 200 gm      ",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/Homeopathic/chia.png"),
    },
    {
      id: "product2",
      name: "Cogin",
      description: "Powder",
      packSize: "Pack Size: 375 gm      ",
      price: "Rs 830.00      ",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/Homeopathic/cogin.webp"),
    },
    {
      id: "product3",
      name: "Chamomilla Gripe Water",
      description: "powder",
      packSize: "Pack Size :375gm",
      price: "Rs 830.00",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/Homeopathic/gripe.png"),
    },
    {
      id: "product4",
      name: "Fakiri Unani Marhum 7 gm ",
      description: "Spray",
      packSize: "Pack Size :120ml",
      price: "Rs 172",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/Homeopathic/fakiri.png"),
    },
    {
      id: "product5",
      name: "Hamdard Kushta Marwareed ",
      description: "Oil",
      packSize: "Pack Size :120ml",
      price: "Rs 299",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/Homeopathic/hamdard.png"),
    },
    {
      id: "product6",
      name: "Hamdard Hiknol 25 Gram",
      description: "Oil",
      packSize: "Pack Size :120ml",
      price: "Rs 704",
      originalPrice: 925,
      discount: "5% Off",

      image: require("../../assets/Homeopathic/hikin.png"),
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
    },
    {
      id: "product9",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/enfoma.webp"),
    },
    {
      id: "product10",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/versusohmygut.webp"),
    },
    {
      id: "product11",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/enfoma.webp"),
    },
    {
      id: "product12",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product13",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product14",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product15",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product16",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product17",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product18",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product19",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product20",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product21",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product22",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product23",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product24",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
      id: "product25",
      name: "Dettol 500ml",
      description: "Antiseptic liquid",
      packSize: "Pack Size :500ml",
      price: "Rs 759",
      originalPrice: 925,
      discount: "5% Off",
      image: require("../../assets/DailyRoutineCard/Dettol.png"),
    },
    {
        id: "product26",
        name: "Dettol 500ml",
        description: "Antiseptic liquid",
        packSize: "Pack Size :500ml",
        price: "Rs 759",
        originalPrice: 925,
        discount: "5% Off",
        image: require("../../assets/DailyRoutineCard/Dettol.png"),
      },
      {
        id: "product27",
        name: "Dettol 500ml",
        description: "Antiseptic liquid",
        packSize: "Pack Size :500ml",
        price: "Rs 759",
        originalPrice: 925,
        discount: "5% Off",
        image: require("../../assets/DailyRoutineCard/Dettol.png"),
      },
      {
        id: "product28",
        name: "Dettol 500ml",
        description: "Antiseptic liquid",
        packSize: "Pack Size :500ml",
        price: "Rs 759",
        originalPrice: 925,
        discount: "5% Off",
        image: require("../../assets/DailyRoutineCard/Dettol.png"),
      },
      {
        id: "product29",
        name: "Dettol 500ml",
        description: "Antiseptic liquid",
        packSize: "Pack Size :500ml",
        price: "Rs 759",
        originalPrice: 925,
        discount: "5% Off",
        image: require("../../assets/DailyRoutineCard/Dettol.png"),
      },
      {
        id: "product30",
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
    <>
    <Header />
    <Navbar />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {products.map((item) => ( 
        <div
          key={item.id}
          className="flex flex-col  relative justify-center mx-2 border p-4 rounded-lg shadow  border-gray-200 my-6"
        >
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
          <AddToCartButton product={item}/>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
};

export default LifeStyleCategory;
