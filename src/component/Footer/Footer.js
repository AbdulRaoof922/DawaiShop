import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  const data = [
    {
      title: "DAWAAI",
      id:1,

      links: [
        { name: "Careers", path: "/careerpage" },
        { name: "Blog", path: "/blog" },
        { name: "About us", path: "/about" },
        { name: "Contact us", path: "/contact" },
        { name: "Privacy Policy", path: "/PrivacyPolicy" },
        { name: "Contact us", path: "/contact" },
      ],
    },
    {
      id:2,
      title: "POPULAR CATEGORIES",

      links: [
        { name: "Oral Care", path: "/OralCare" },
        { name: "Baby Nutrition", path: "/BabyNutrition" },
        { name: "Herbal Care", path: "/HerbalCare" },
        { name: "Men's Health", path: "/MenHealth" },
        { name: "Women's Health", path: "/WomenHealth " },
        { name: "Support & Braces", path: "/Support & Braces" },
      ],
    },
    {
      id:3,
      title: "CONTACT US",

      links: [
        { name: "03136003823" },
        { name: "abdulraoof922@gmail.com" },
        { name: "Ali Town Lahore house 206" },
        { icon: <FaFacebookF  size={20} />, path: "https://www.facebook.com" },
        { icon: <FaTwitter className="mx-8"  size={20} />, path: "https://www.twitter.com" },
        { icon: <FaInstagram className="mx-2"  size={20} />, path: "https://www.instagram.com" },
      ],
    },
  ];
  return (
    <>
      <div className=" bg-[#EEEEEE] grid sm:grid-flow-col  sm:w-full h-full ">
        {data.map((item) => (
          <div key={item.id} className="flex justify-center w-full sm:h-full h-full sm:py-32 ">
            <div className="w-1/2 ">
              <h1 className="text-2xl text-[#2a579b] mb-2">{item.title}</h1>

              {item.links.map((link ,index) => (
                <Link key={item.index} className="w-full h-full text-md" to={link.path}>
                  <p className="text-md">{link.name}</p>
                </Link>
              ))}

              <div className="flex mt-4 w-fit ">
                {item.links.map((link ,index) => (
                  <Link key={item.index} className=" text-md" to={link.path}>
                    <div className="w-fit">{link.icon}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <div className="w-full bg-blue-500">
          
        </div>
    </>
  );
}

export default Footer;
