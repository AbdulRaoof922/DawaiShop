import React from "react";

function ExploreBlogCard({ title, descrption, paragraph, image }) {
  const data = [
    {
      paragraph: "Cervical Cancer In Pakistan  The Symptoms, Stages and Treatment  ",
      image: require("../../assets/ExploreBlogCardimg/papswear.png"),
      id:"paragraph1"
    },
    {
        id:"paragraph2" ,
      image: require("../../assets/ExploreBlogCardimg/healthytips.jpg"),
      image: require("../../assets/ExploreBlogCardimg/dawai.jpg"),

      paragraph: "ALL ABOUT INTERMITTENT       ",

    },
    {
        id:"paragraph3" ,
      paragraph: "HEALTHY TIPS TO FOLLOW DURING RAMADAN 2023  !",
      image: require("../../assets/ExploreBlogCardimg/healthytips.jpg"),


    },
    { id:"paragraph4" ,
      paragraph: "ALL ABOUT INTERMITTENT FASTING      ",
      image: require("../../assets/ExploreBlogCardimg/dawai.jpg"),
    },
  ];
  return (
    <div className="grid grid-rows-1 grid-cols-4">
      {data.map((card, index) => (
        <div key={card.id} className="px-6 h-full items-center  ">
          <img
            src={card.image}
            alt={card.id.trim()}
            className="mx-2 object-contain h-70 w-64 " 
          />
          <p className=" font-bold mt-4 ">{card.paragraph}</p>

        </div>
      ))}
    </div>
  );
}

export default ExploreBlogCard;
