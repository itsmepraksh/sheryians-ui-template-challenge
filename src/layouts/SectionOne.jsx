import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import oImgOne from "../assets/images/o-img-one.png";
import oImgTwo from "../assets/images/o-img-two.png";
import heroImg from "../assets/images/herro-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

        <div className="flex justify-between gap-5 md:justify-between 2xl:justify-around md:w-[75%] xl:w-[85%]">
          <h3 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-bold">
            APPROACH
          </h3>
          <div className="animate-btn bg-black    flex items-center  text-xs rounded-3xl gap-1 ">
            <FontAwesomeIcon
              className="bg-white text-black p-2 rounded-full m-[3px]"
              icon={faWandMagicSparkles}
            />
            <p className=" bg-yellow-400 text-gray-800 px-3 py-[8px]  rounded-3xl">
              Start Animating
            </p>
          </div>
        </div>
      </div>

      <div className="heroimg relative w-full m-0">
        <div className="bg-black bottom-0  absolute w-full h-20"></div>
        <img src={heroImg} className="relative z-[9]" alt="" />
      </div>
    </div>
  );
};

export default SectionOne;
