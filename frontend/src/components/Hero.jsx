import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">
          <img
            src="logo.webp"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/4 rounded-xl shadow-2xl mx-10 hover:scale-105 transform transition duration-500 ease-in-out"
          />
          <div className="mx-10 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Welcome to VibeChat!
            </h1>
            <p className="py-6 text-lg sm:text-xl md:text-2xl">
              Experience Seamless and Instant Communication with Your Go-To
              Real-Time Chat Application
            </p>
            <Link to="/signup">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      {/* services */}
      <div className="services bg-base-200 pb-20" id="services">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center py-[60px]">
          Our Services
        </h2>
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div className="card bg-base-100 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5 shadow-xl m-4">
            <figure>
              <img src="theme.png" alt="theme" className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Theme Control</h2>
              <p>
                <b>Personalize Your Chat:</b> Customize your chat interface with
                various themes or create your own for a unique look.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5 shadow-xl m-4">
            <figure>
              <img src="encryption.png" alt="Encryption" className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Encryption</h2>
              <p>
                <b>Secure Conversations:</b> Enjoy end-to-end encrypted chats,
                ensuring your messages remain private and secure.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5 shadow-xl m-4">
            <figure>
              <img
                src="logo2.png"
                alt="Real Time Messaging"
                className="w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Real-Time Messaging</h2>
              <p>
                <b>Instant Connection:</b> Experience seamless, real-time
                messaging for smooth and immediate conversations.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Hero;
