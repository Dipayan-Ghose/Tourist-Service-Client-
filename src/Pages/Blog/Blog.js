import React, { useRef } from "react";
import "./Blog.css";
import "../Home/Home.css";
import { toast } from "react-toastify";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { useEffect } from "react";
import { success } from "daisyui/src/colors";
import useHelmet from "../../Helmet/useHelmet";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

export const Blog = () => {
  useHelmet("Blog");
  const form = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div
      className="lg:w-[1200px] mx-auto my-10 blogResponsive"
      // data-aos="zoom-in"
      // data-aos-delay="80"
      // data-aos-duration="1000"
    >

      <div
        className="card backgroundImg h-[400px] mx-auto lg:w-96  shadow-2xl rounded-4 mb-5"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="900"
      >
        <div className="avatar mx-auto pt-8">
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://avatars.githubusercontent.com/u/76113796?v=4" />
          </div>
        </div>
        <div className="card-body items-center text-center ">
          <h2 className="text-2xl text-green-800 font-semibold ">Dipayan Ghose</h2>
          <h3 className="card-title text-yellow-600">React Developer</h3>
          <hr className="p-1 m-1 bg-black-800 w-[200px]"></hr>
          <p className=" socialResponsive gap-4">
            <a
              href="https://github.com/Dipayan-Ghose"
              target="_blank"
              className="text-black text-2xl"
            >
              <BsGithub></BsGithub>
            </a>{" "}
            <a
              href="https://linkedin.com/in/dipayan-ghose-bd"
              target="_blank"
              className="text-2xl"
            >
              <BsLinkedin className="text-blue-600"></BsLinkedin>
            </a>{" "}
          </p>
        </div>
      </div>

      <div
        className="card backgroundImg mx-auto lg:p-5 px-7 lg:w-96 h-[400px] rounded-4 shadow-2xl  "
        data-aos="zoom-in"
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
  );
};

export default Blog;
