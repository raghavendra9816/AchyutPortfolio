import boy from "../assets/boy.png.png";
// import css from "../assets/css.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twiter.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
// import html from "../assets/html.png";
import redux from "../assets/retux.png";
const Photo = () => {
  return (
    <section className="relative z-10">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row item-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There,
              <br />
              I'am Achyut<span className="text-red-500 ml-6">Adhikari</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Devloper</p>
            <p className="mb-4">
              I'm a passionate web Devloper with expertise in Html, css, React,
              Tailwind, and modern web technologies. I love creating beautiful
              and functionality website that solve real world problem...
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              Download Cv
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={boy} className="lg:h-[90vh] h-96" />
            <img
              src={react}
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />

            <img
              src={redux}
              className="absolute w-10 top-0 right-5 md:hidden"
            />

            <img
              src={tailwind}
              className="absolute w-10 rounded-full  right-0 botton-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <img src={linkedin} className="w-20" />
        <img src={twitter} className="w-20" />
        <img src={instagram} className="w-20" />
        <img src={facebook} className="w-20" />
      </div>
    </section>
  );
};

export default Photo;
