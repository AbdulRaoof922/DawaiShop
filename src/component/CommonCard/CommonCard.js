import React from "react";
import CommonButton from "./../CommonButton/CommonButton";

function CommonCard({descrption}) {
  const data = [
    {
      id: "1",
      title: "Have a prescription?",
      descrption: "Upload prescription and",
      image: require("../../assets/commonimagecard.webp"),
      color: "bg-[#F29D43] hover:bg-green-600",
    },
    {
      id: "2",
      title: "Speak to Specialists",
      descrption: "Doctor Consultation",
      image: require("../../assets/doctorspecialist.webp"),
      color: "bg-[#32AA9E] hover:bg-green-600",
    },
    {
      id: "3",
      title: "At home Services",
      descrption: "Home Services",
      image: require("../../assets/homeservice.webp"),
      color: "bg-[#003B82] hover:bg-green-600",
    },
    {
      id: "4",
      title: "Lab at home",
      descrption: "Lab Tests & Checkups",
      image: require("../../assets/labtest.webp"),
      color: "bg-[#003B82] hover:bg-green-600",
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row sm:w-full space-y-5 sm:space-y-0 sm:space-x-5">
      {data.map((card, index) => (
        <div
          key={index}
          className=" sm:w-3/4  flex-wrap bg-[#FFEAD4] h-48 rounded-md   p-4  relative"
        >
          <h1 className="text-xl">{card.title}</h1>
          <p>{descrption}</p>
          <p className="mb-10">{card.descrption}</p>
          <div>
            <img
              className="h-full w-1/2 absolute bottom-0 right-0 "
              src={card.image}
            />
            <CommonButton color={card.color} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommonCard;
