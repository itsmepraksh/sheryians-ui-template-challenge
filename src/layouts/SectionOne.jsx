 
import oImgOne from "../assets/images/o-img-one.png";
import oImgTwo from "../assets/images/o-img-two.png";
import heroImg from "../assets/images/herro-img.png"; 
import MagicBtn from "../components/MagicBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import SlideBar from "../components/SlideBar";

const SectionOne = () => {
  return (
    <div>
      <div className=" section-one  flex flex-col font-medium items-center justify-between xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12">
        <h1 className=" font-league font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl flex items-center justify-center ">
          TECHN
          <span>
            <img
              className="w-10 md:w-15 lg:w-20 xl:w-27 2xl:w-28 aspect-1/1 inline -mt-2 md:-mt-4  lg:-mt-6 xl:-mt-8  "
              src={oImgOne}
              alt=""
            />
          </span>
          L
          <span>
            <img
              className="w-10 md:w-15 lg:w-20 xl:w-27 2xl:w-28 aspect-1/1 inline -mt-2 md:-mt-4 lg:-mt-6 xl:-mt-8 "
              src={oImgTwo}
              alt=""
            />
          </span>
          GY
        </h1>

        <div className="flex justify-between gap-5 md:justify-between  md:w-[75%] xl:w-[85%] 2xl:w-[95%]">
          <h3 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-bold">
            APPROACH
          </h3>
        <MagicBtn/>
        </div>
      </div>

      <div className="heroimg overflow-hidden relative w-full mt-10 md:mt-5 lg:-mt-8 xl:-mt-12 2xl:-mt-20">
        <SlideBar styling={'absolute bottom-5 lg:bottom-0 -left-7 -rotate-[5deg] lg:-rotate-[4deg] xl:-rotate-[3deg] z-[1]'}/>
        <SlideBar styling={'absolute bottom-20 lg:bottom-16 -left-5 -rotate-[5deg] lg:-rotate-[4deg] xl:-rotate-[3.5deg] z-[1]'}/>
        <div className="bg-black bottom-0  absolute w-full h-25 md:h-30 lg:h-35 xl:h-40 2xl:h-45"></div>
        <img src={heroImg} className="relative z-[9] md:w-[75%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]  flex justify-self-center " alt="" />
      </div>
    </div>
  );
};

export default SectionOne;
