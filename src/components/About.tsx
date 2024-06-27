import Image from "next/image";
import MagicButton from "./MagicButton";
import Shimmer from "./Shimmer";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className=" ">
      <div className="flex flex-col-reverse md:flex-row max-w-6xl mx-auto">
        <div className=" flex flex-col items-center md:items-start gap-4 md:gap-7">
          <h2 className="text-2xl md:text-5xl lg:text-8xl text-sky-400 font-bold mb-2 md:mb-5">
            Lorem ipsum dolor sit amet.
          </h2>
          <ul className="list-none items-start text-start space-y-1 md:space-y-3 text-sky-300 text-sm md:text-lg">
            <li className="">Lorem ipsum dolor sit amet .</li>
            <li className="">Lorem ipsum dolor sit amet consectetur.</li>
            <li className="">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li className="">Lorem ipsum amet consectetur adipisicing.</li>
            <li className="">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </li>
          </ul>
          <div className="flex gap-4 md:gap-6 justify-center items-start my-2 md:my-5 text-4xl md:text-6xl ">
            <FaFacebook className="text-blue-500" />
            <FaTwitter className="text-sky-500" />
            <FaInstagram className="text-red-500" />
            <FaLinkedin className="text-blue-800" />
            <FaGithub className="text-white" />
          </div>
          <div className="flex gap-2 md:gap-5">
            <MagicButton />
            <Shimmer />
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/img/Coding 3.png"
            alt="coding"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
