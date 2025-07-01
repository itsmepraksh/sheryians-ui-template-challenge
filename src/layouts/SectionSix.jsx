import Button from "../components/Button";

import sectionFive from "../assets/images/section-5.png";

const SectionSix = () => {
  return (
    <div className="section-six relative flex flex-col md:flex-row  font-medium lg:items-center lg:justify-between xl:justify-self-center  bg-black md:mx-[5%] xl:mx-[15%] p-4 md:p-0 xl:w-[65%]">
      <div className="md:w-[55%] xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12 text-white">
        <h1 className="font-league text-3xl font-bold py-4 uppercase">
          START YOUR REVOLUTIONIZING JOURNEY!
        </h1>

        <Button
          styling={"text-black bg-white w-[50%] text-center py-3 mt-4"}
          text={"Get Started"}
        />
        <Button
          styling={"bg-black w-[50%] py-3 border-[1px] mt-4 text-center"}
          text={"Start Creating"}
        />
        <div className="btn"></div>
      </div>

      <div className="bg-yellow-300 rounded-l-[50%]  md:w-1/2  my-[0%]  -mr-[5%] xl:-mr-[0%]  p-0  overflow-hidden  my-4">
        <img src={sectionFive} className=" " alt="hero-img" />
      </div>
    </div>
  );
};

export default SectionSix;
