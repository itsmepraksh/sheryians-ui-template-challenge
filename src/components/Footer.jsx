import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import heroimg from "../assets/images/footer-img.png";
import SlideBar from "./SlideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faTumblr,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
      <div className="section-nine heroimg overflow-hidden relative w-full mt-15 md:mt-15">
        
        <SlideBar
          styling={
            "absolute -bottom-5 right-5 -rotate-[10deg]  z-[1]"
          }
        />
        <SlideBar
          styling={
            "absolute bottom-22 md:bottom-40 -left-10 rotate-[2deg] md:rotate-[2deg]  lg:rotate-[2deg] xl:-rotate-[3.5deg] z-[1]"
          }
        />
       

        <div className="bg-black bottom-0 absolute w-full h-[70%] md:h-[75%] lg:h-[80%] "></div>
        <h2 className="relative top-23 md:top-35 lg:top-38 xl:top-50 text-white lg:text-xl z-[9] left-5 md:left-15 lg:px-[4rem] ">
          <FontAwesomeIcon className="text-lg " icon={faGlobe} /> PixelAI
        </h2>
        <div className="relative w-[30%] lg:w-[38%] xl:w-[33%] flex gap-5 justify-self-end top-20 md:top-30 xl:top-40 text-white text-xs md:text-sm lg:text-xl z-[9] lg:px-[4rem]  ">
          <a >Gallery</a>
          <a >Collections</a>
          <a >Pricing</a>
        </div>
        <img
          src={heroimg}
          className="relative z-[9] w-[60%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[30%]  flex justify-self-center "
          alt=""
        />
         <div className=" z-[9] absolute left-5 bottom-1 md:bottom-3 lg:bottom-7 text-sm text-white  md:left-15 lg:px-[4rem] ">
          <div className=" flex gap-2 lg:py-3 xl:py-4 ">
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTumblr} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <p className="font-medium text-xs py-1">copyrigth &copy;PixelAi, All Rights Reserved</p>
        </div>
      </div>
  );
};

export default Footer;
