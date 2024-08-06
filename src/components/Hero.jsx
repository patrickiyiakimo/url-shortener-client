import React from "react";

const Hero = () => {
  return (
    <div className="font-abc  mt-36 md:flex flex-row-reverse pb-32 ">
      <div>
        <img
          src="/images/undraw_Programming_re_kg9v (1).png"
          alt="programmer's image"
          className="mt-10  md:w-3/4 md:ml-32 rounded-t-full"
        />
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-center text-3xl pb-3  md:text-6xl md:ml-28">
          More than just <br className="hidden md:block"/>
          <span className="underline">shorter links</span>
        </h1>
        <p className="ml-2 md:ml-28">
          Build your brand's recognition and get detailed insights <br />
          on how your links are performing. Weblify serves as a user-friendly
          URL shortener that simplifies the process of managing and <br />
          shortening links, including branded ones. <br />
          Enhance your brand's growth and business potential by utilizing short,
          memorable, and engaging links with Weblify's versatile platform.
        </p>
        <a href="#input" id="input">
          <button className="btn mt-10 ml-20 px-20 text-white hover:text-gray-600 md:ml-28 md:px-6 rounded-full bg-blue-300">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
