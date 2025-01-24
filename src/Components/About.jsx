import Mernstack from "../assets/MERN.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/retux.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/nodejs.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import nextjs from "../assets/nextjs.png";

const About = () => {
  return (
    <div className="relative z-10" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Achyut Adhikari
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Full-Stack Developer with expertise in web development,and MERN
              stack.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  I Started my joirney in web devlopment with a passion for
                  creating intutive and scalable application. With proficiency
                  in the MERN stack (MongoDb, Express, React, Node.js), I have
                  built projects such as a Portfolio website , weather forecast
                  and other many project. My project demonstrate my ability to
                  integrate powerful backend solutions with sleek,
                  usser-friendly frontend designs.
                </p>
                <img src={Mernstack} className="p-2 rounded-lg w-52 mt-4" />
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={html} className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={css} className="w-10" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={javascript} className="w-10" />
                    <span className="font-semibold">JAVASCRIPT</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={bootstrap} className="w-10" />
                    <span className="font-semibold">BOOTSTRAP</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={tailwind} className="w-10" />
                    <span className="font-semibold">TAILWIND</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={mongodb} className="w-10" />
                    <span className="font-semibold">MONGO DB</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={express} className="w-10" />
                    <span className="font-semibold">EXPRESS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={react} className="w-10" />
                    <span className="font-semibold">REACT</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={node} className="w-10" />
                    <span className="font-semibold">NODE JS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={redux} className="w-10" />
                    <span className="font-semibold">REDUX</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={nextjs} className="w-10" />
                    <span className="font-semibold">NEXT JS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">More About Me</h3>
            <p className="mt-4 text-lg text-gray-600">
                Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web devlopment
                . I also run a YOTUBE Channel where I used to upload photography and travel vlogs. Mostly phoography related content and motivational quotes. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
