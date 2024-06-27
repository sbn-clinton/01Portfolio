import Link from "next/link";
import {
  FaChevronUp,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 py-5">
        <div className="">
          <h3 className="text-base font-normal text-sky-500">
            Copyright @ 2024
          </h3>
        </div>
        <div className=" flex gap-2 text-lg">
          <FaFacebook className="text-blue-500" />
          <FaTwitter className="text-sky-500" />
          <FaInstagram className="text-red-500" />
          <FaLinkedin className="text-blue-800" />
          <FaGithub className="text-white" />
        </div>
        <div className=" self-end md:self-center border p-2 rounded-full border-sky-700 ">
          <Link href="#">
            <FaChevronUp className=" text-slate-500 text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
