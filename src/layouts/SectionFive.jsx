import sectionFourA from "../assets/images/section-4-1.png";
import sectionFourB from "../assets/images/section-4-2.png";
import MagicBtn from "../components/MagicBtn";

const SectionFive = () => {
  return (
    <div className="section-five flex flex-col gap-5 md:flex-row font-medium lg:items-center lg:justify-between xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12">
      
      <div className="my-4">
        <div>
        <h1 className="font-league text-3xl font-bold py-4 uppercase">
          the future of art with ai
        </h1>

        <MagicBtn
          styling={"bg-transparent my-2 "}
          fontstyle={"bg-yellow-400 text-sm p-2 m-[2px] xl:p-3"}
          textstyle={"!bg-white !text-sm"}
        />
      </div>
        <img src={sectionFourA} alt="hero-img-3" />

        <div className="my-4">
          <h1 className="font-league text-2xl font-bold py-4 uppercase">
            BUILD A COMMUNITY
          </h1>
          <p className="text-xs font-info text-gray-500">
            Our platform celebrates individuality, enabling users to craft
            personalized pieces while joining a supportive, dynamic community.
            Dive into a world of endless inspiration and let your imagination
            soar with PixelAlchemy!
          </p>
        </div>
      </div>

      <div className="md:mt-[25%]">
        <div>
          <h1 className='font-league text-2xl font-bold py-4 uppercase'>unleash imagination</h1>
          <p  className='text-xs pb-4 font-info text-gray-500'>PixelAlchemy is a unique platform where technology and creativity blend seamlessly to produce captivating Al-generated art. Designed for artists, enthusiasts, and newcomers alike, PixelAlchemy provides an immersive space to explore</p>
        </div> 
        <img src={sectionFourB} alt="hero-img-3" />
      </div>
      

      {/* 
       */}
    </div>
  );
};

export default SectionFive;
