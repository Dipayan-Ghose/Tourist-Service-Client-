import React, { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useHelmet from "../../Helmet/useHelmet";
import "./Home.css";
import LimitCard from "./LimitCard";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import MotionSection from "./MotionSection";
import Gallery from "./Gallery";


const Home = () => {
  useHelmet("Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getServices = useLoaderData();
  const [slider, nextSlider] = useState(getServices[0]);
  const [limitService, setLimitService] = useState([]);
  const [like, setLike] = useState([4250]);
  const form = useRef();

  const sliderClick = (index) => {
    console.log("click");
    const slide = getServices[index];
    nextSlider(slide);
  };

  useEffect(() => {
    fetch("https://tourist-service-server-ecru.vercel.app/threeServices")
      .then((res) => res.json())
      .then((data) => setLimitService(data))
      .catch((error) => console.log(error));
  }, []);

  const rate = () => {
    const giveLike = parseInt(like + 1);
    setLike(giveLike);
    localStorage.setItem("like", JSON.stringify(like + 1));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("like"));
    if (items) {
      setLike(items);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const resetForm = e.target;

    emailjs
      .sendForm(
        "service_ke4jf7u",
        "template_asmbrpn",
        form.current,
        "4p6lZrqhQPCPeL3kG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm.reset();
    toast.success("Message Sent Successfully", {
      position: "top-center",
      autoClose: 1200,
    });
  };

  return (
    <div className="">
      <div
        className="justify-content-center mb-5 "
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="800"
      >
        <h2 class="absolute text-3xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Want To Enjoy This Beauty?<br></br>{" "}
          <p className="text-sm">Check Our Services</p>
        </h2>
        <img
          className="mx-auto widht mb-2  "
          src={slider.image_url}
          width="500"
          alt=""
        ></img>
        <div className="flex justify-center responsiveImg lg:h-[70px] border-y-2 border-green-700 ">
          {getServices.map((service, i) => (
            <img
              className="m-1 border-2 border-black multiImg "
              key={service._id}
              src={service.image_url}
              onClick={() => sliderClick(i)}
              alt=""
            ></img>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {limitService.map((singleService) => (
          <LimitCard
            key={singleService._id}
            singleService={singleService}
          ></LimitCard>
        ))}
      </div>
      <div
        className="mb-5"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="600"
      >
        <button className="btn btn-primary text-white text-bold text-[20px] w-64 p-3 mt-8 mb-5">
          <Link to="/services">See All</Link>
        </button>
      </div>

          <div>
            <Gallery></Gallery>
          </div>

      <div data-aos="zoom-in" data-aos-delay="80" data-aos-duration="1000">
        <div className="stats stats-vertical lg:stats-horizontal shadow-2xl statistics p-5 mt-5 mb-12">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                onClick={rate}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-black">Total Likes</div>
            <div className="stat-value text-primary">{like}</div>
            <div className="stat-title text-black">Press The Love Icon</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-gray-900">Page Views</div>
            <div className="stat-value text-yellow-500">2.6M</div>
            <div className="stat-desc text-gray-900">
              21% more than last month
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://picsum.photos/200/300" />
                </div>
              </div>
            </div>
            <div className="stat-value text-primary ">96%</div>
            <div className="stat-title text-black">Positive Ratings</div>
            <div className="stat-desc text-black">35 Tour Completed</div>
          </div>
        </div>
      </div>
     
      <div class="px-4 py-24 mx-auto max-w-7xl">
  <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div data-aos="fade-right"
        data-aos-delay="80"
        data-aos-duration="800">
      <h2 class="mb-4 text-2xl font-bold tracking-tight text-center text-green-700 md:leading-tight sm:text-left md:text-4xl">Clear overview for efficient tracking</h2>
      <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
      An area of 4479 square kilometers surrounded by four lush green hilly ranges called Politai, Meranja, Tambang and Wailatong. It is at the same time home of different indigenous tribes who resides here since the medieval period. 
      </p>
      <a href="#" class="w-full btn btn-primary btn-lg sm:w-auto text-white">Learn More</a>
    </div>
    <div class="w-full h-full bg-green-200">
      <img className="feature" src="https://i.ibb.co/fpj8rKJ/bandarban.jpg"></img>
    </div>
  </div>
  <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div class="order-none md:order-2" data-aos="fade-left"
        data-aos-delay="80"
        data-aos-duration="800">
      <h2 class="mb-4 text-2xl font-bold tracking-tight text-center text-green-700 md:leading-tight sm:text-left md:text-4xl">Travel with us and enjoy your vacation</h2>
      <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
      The coastal area of Bangladesh. It stands in the belly of Bay of Bengal. This Island is the off coast near Chakaria and Cox’s Bazar of Bangladesh. Total island is covered by 215.8 square kilometers of lands.
      </p>
      <a href="#" class="w-full btn btn-primary text-white btn-lg sm:w-auto">Learn More</a>
    </div>
    <div class="w-full h-full bg-green-200">
     <img className="feature" src="https://i.ibb.co/gtDFjt5/kutubdia.jpg"></img>
    </div>
  </div>
</div>
<div className="px-4 py-2 lg:py-24 mx-auto max-w-7xl">
  <div className="grid items-center w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-11 lg:gap-24 xl:w-11/12">
    <div className="col-auto text-center md:col-span-7 lg:text-left" data-aos="zoom-in"
        data-aos-delay="80"
        data-aos-duration="800">
      <h1 className="mb-4 text-3xl font-bold leading-tight text-green-700 md:text-4xl md:leading-none tracking-none md:tracking-tight">Ready to start your journey?</h1>
      <p className="mb-10 text-xl font-[15px] text-orange-700 md:text-xl md:tracking-relaxed md:mb-4">
      One of the most promising and well-known travel agencies in Bangladesh. The main office of this agency is in Dhaka, the capital of Bangladesh. Feel free to connect with us and explore the world.
      </p>
    </div>
    <div className="col-auto md:col-span-4">
    <div
        className="card backgroundImg mx-auto lg:p-5 px-7 lg:w-96 h-[400px] rounded-4 shadow-2xl  "
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="900"
      >
        <h3 className="text-green-800 text-2xl mb-4 mx-auto">Contact</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group mb-6">
            <input
              type="text"
              name="user_name"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            ></input>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              name="user_email"
              required
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            ></input>
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
