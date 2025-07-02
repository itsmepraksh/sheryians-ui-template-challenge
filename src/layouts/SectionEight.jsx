import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image4 from '../assets/images/section-4-2.png';
import image1 from '../assets/images/main-hero-2.png';
import image5 from '../assets/images/category-img6.png';
import image2 from '../assets/images/section-8-img.png';
import image3 from '../assets/images/section-8-img2.png';
import image6 from '../assets/images/category-img2.png';


const SectionEight = () => {
  return (
    <div>
    <div className="section-eight flex font-medium  justify-between xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12  "> 
        <h1 className="text-3xl uppercase w-2/3 md:w-[60%] lg:w-[45%]    font-bold" >pixelai highlight of this week</h1>
        <p>
          <FontAwesomeIcon className="text-white bg-black p-2 rounded-full" icon={faUpRightFromSquare} />
        </p>
    
    
    </div>
      <div className="image-box my-5 flex flex-col md:flex-row overflow-x-auto gap-5 px-[2rem] md:px-0 no-scrollbar">
        <img className="md:w-1/3 xl:w-[20%]" src={image1} alt="image-1" />
        <img className="md:w-1/3 xl:w-[20%]" src={image2} alt="image-2" />
        <img className="md:w-1/3 xl:w-[20%]" src={image3} alt="image-3" />
        <img className="md:w-1/3 xl:w-[20%]" src={image4} alt="image-4" />
        <img className="md:w-1/3 xl:w-[20%]" src={image5} alt="image-5" />
        <img className="md:w-1/3 xl:w-[20%]" src={image6} alt="image-6" />
      </div>

    </div>
  );
};

export default SectionEight;
