import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Social = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mx-auto text-black border-t-2 border-black-100 mb-6 py-4 dark:text-beige dark:border-black-100 ">
      <div className="w-fit flex mx-auto">
        <a
          href="https://www.linkedin.com/in/abhishek-tripathi-kuberji-a33502224/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="w-7 h-7 m-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue hover:translate-y-[-3px] focus:translate-y-[-3px] 2xl:w-10 2xl:h-10" />
        </a>
        <a
          href="https://github.com/hakkiai"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="w-7 h-7 m-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue hover:translate-y-[-3px] focus:translate-y-[-3px] 2xl:w-10 2xl:h-10" />
        </a>
        <a
          href="mailto:abhishektripathikuberji@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="w-7 h-7 m-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue hover:translate-y-[-3px] focus:translate-y-[-3px] 2xl:w-10 2xl:h-10" />
        </a>
        <a
          href="https://leetcode.com/u/kuber_001/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode className="w-7 h-7 m-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue hover:translate-y-[-3px] focus:translate-y-[-3px] 2xl:w-10 2xl:h-10" />
        </a>
      </div>
      <h4 className="w-fit text-black/30 text-sm font-roboto font-semibold mx-auto dark:text-black-200 lg:text-md 2xl:text-xl">
        &copy; 2025 Abhishek Tripathi Kuberji
      </h4>
    </div>
  );
};

export default Social;
