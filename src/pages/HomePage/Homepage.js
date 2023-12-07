import React from "react";
import Header from "./../../component/Header/Header";
import Navbar from "./../../component/Navbar/Navbar";
import medicine from "../../assets/medicine.webp";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import meezan from "../../assets/OffersCardImage/meezanft.png";
import tcs from "../../assets/OffersCardImage/tcs.png";
import charted from "../../assets/OffersCardImage/standardchartedft.png";
import HBL from "../../assets/OffersCardImage/hblft.png";
import karachi from "../../assets/OffersCardImage/karachi.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import CommonCard from "./../../component/CommonCard/CommonCard";
import PopularProductCard from "../../component/CommonCard/PopularProductCard";

import BrandCard from "./../../component/CommonCard/BrandCard";
import DailyWellBeign from "../../component/CommonCard/DailyWellBeign";
import Homeopathic from "../../component/CommonCard/Homeopathic ";
import OffersCard from "../../component/CommonCard/OffersCard";
import SexulWillnesscard from "../../component/CommonCard/SexulWillnesscard";
import MedicalEquipments from "./../../component/CommonCard/MedicalEquipments";
import ExploreBlogCard from "../../component/CommonCard/ExploreBlogCard";
import Footer from './../../component/Footer/Footer';

function Homepage() {
  return (
    <div className="w-full ">
      <Header />
      <Navbar />
      <div className="bg-green-500 grid grid-cols-1 sm:grid-cols-3 w-full">
        <div className="bg-[#DCEBFA] flex flex-col sm:flex-row relative">
          <div className="p-4  h-4">
            <h1 className="text-2xl">Pharmacy</h1>
            <p>Upload prescription and</p>
            <p>we will create your order!</p>
            <Link to="/ordernow">
              <button className="bg-[#003B82] hover:bg-blue-700 text-white font-bold py-1 rounded px-6 border border-blue-700 mt-4 absolute bottom-10">
                Order Now
              </button>
            </Link>
          </div>
          <div className="flex justify-end p-4">
            <img className="h-38 w-38" src={medicine} alt="medicine" />
          </div>
        </div>
        <div className="col-span-2  ">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src={slide1} alt="slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide4} alt="slide 4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    
      <div className="mt-4 w-full">
      <CommonCard />

      </div>
      <h1 className="text-3xl font-sans font-normal mt-4 pl-4">
        Popular Products
      </h1>
      <div className="flex mt-4 sm:w-full">
        <PopularProductCard />
      </div>
      <div className="flex mt-4 sm:w-full">
        <BrandCard />
      </div>
      <h1 className="text-3xl font-sans font-normal mt-4 pl-4 w-full ">
        Daily Well-being
      </h1>
      <div className="flex ">
        <DailyWellBeign />
      </div>
      <h1 className="text-3xl font-sans font-normal mt-4 pl-4 ">
        Homeopathic & Herbal Products
      </h1>
      <div className="flex sm:w-full">
        <Homeopathic />
      </div>
      <h1 className="text-3xl font-sans font-normal mt-4 pl-4 ">
        Offers for you
      </h1>
      <div className="flex w-full ">
        <OffersCard />
      </div>
      <h1 className="text-3xl font-sans font-normal mt-4 pl-4 ">
        Sexual Wellness
      </h1>
      <div className="flex w-full">
        <SexulWillnesscard />
      </div>
      <h1 className="text-3xl font-sans font-normal mt-4 pl-4 ">
        Medical Equipments
      </h1>
      <div className=" sm:w-full">
        <MedicalEquipments />
      </div>
      <h1 className="text-3xl font-sans font-normal mt-4 pl-4 ">
        Explore Blogs
      </h1>
      <div className="flex sm:mt-4 mt-4 flex-wrap sm:w-full w-full">
        <ExploreBlogCard />
      </div>
      <div className="mt-12 p-24 sm:flex flex-col">
        <h1 className="text-3xl">Dawaai</h1>
        <p className="mt-2 justify-center">
          Dawaai is Pakistan’s leading digital healthcare platform that brings
          you complete health facilities right to your doorstep. Order medicines
          online with our e-pharmacy or consult top doctors online in Pakistan
          from our App right from the comfort of your home. Dawaai Pakistan is
          the first-ever internationally certified and registered healthcare
          merchant (LegitScript Certified). We pride ourselves in providing our
          users with authentic medicines, medical equipment and health
          <br />
          supplements in Pakistan. Moreover, you can opt to get to avail at-home
          care services such as home nursing services or book lab tests online.
          Over the years we have built trust by offering our users the utmost
          convenience to buy medicines. Get your prescriptions online and get
          monthly refill facilities with Dawaai Asaan orders. You can also get
          information about your medicines and learn its uses with our official
          medical content that will help you make better health choices.
          <br /> You can order online medicines, health products, lab test
          services,online doctor consultations from anywhere in Pakistan with
          ease (Karachi, Islamabad, Lahore, Rawalpindi & more) by using our fast
          medicine delivery service . In Karachi, you can get your selected
          medicines within 60 minutes of your order confirmation with dShops.
          Our mobile application is available on iOS andandroid.
        </p>
        <h2 className="text-2xl">ONLINE PHARMACY</h2>
        <p>
          Dawaai is an online pharmacy that sells genuine medicines at a
          discounted rate. We offer the lowest medicine price in Pakistan while
          offering several bank discounts and promo codes with Dawaai discounts.
          The process works by uploading a prescription that our pharmacists
          will verify, and create an order for you. We offer medicines from
          reputable brands , Pfizer, GSK, Getz Pharma, and more.
        </p>
        <h2 className="text-2xl">DOCTOR CONSULTATION</h2>
        <p>
          Dawaai’s Online Doctor consultation service is safe and easy. We offer
          free live chat with doctors and paid video consultations with doctors
          through easy online appointments. We have a multi-disciplinary team of
          highly qualified doctors from leading General Physicians,
          Gynaecologists, Chest Specialists, Dermatologists, Nutritionists to
          Cardiologists in Pakistan, etc that prioritize patient
          confidentiality.
        </p>
        <h2 className="text-2xl">LAB TESTS & CHECK-UPS</h2>
        <p>
          Book lab tests online at discounted rates anywhere in Pakistan on the
          Dawaai website and app. Get your urgent health check-ups and popular
          health tests such as COVID-19 IgG Antibody test, Blood tests, HbA1c
          test and more done right from your home. We provide online patient
          reports and lab packages from Chughtai Labs, Essa Lab and Pro-Lab.
        </p>
        <h2 className="text-2xl">HEALTH PACKAGES & PROGRAMS</h2>
        <p>
          Do you struggle to meet your health goals and maintain a healthy
          lifestyle? Worry not, Dawaai has introduced various health packages
          and programs with which you can stick to a healthier routine and
          lifestyle along with earning medicine coverages, free doctor
          consultation vouchers, and rewards. Dawaai offers Diabetes Care
          Program and Obesity Care Program that you can subscribe to at nominal
          rates.
        </p>
        <h2 className="text-2xl">OUR PARTNERS</h2>
        <div className="mt-10 grid grid-rows-1 grid-cols-5">
          <img className="h-24" src={meezan} alt="" />
          <img className="h-24" src={tcs} alt="" />
          <img className="h-24" src={HBL} alt="" />
          <img className="h-24" src={charted} alt="" />
          <img className="h-24" src={karachi} alt="" />
        </div>
       
      </div>
      <div className="">
          <Footer/>
        </div>
    </div>
  );
}

export default Homepage;
