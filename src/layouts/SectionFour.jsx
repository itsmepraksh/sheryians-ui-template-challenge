
import categoryOne from  '../assets/images/category-img1.png';
import categoryTwo from '../assets/images/category-img2.png';   
import categoryThree from '../assets/images/category-img3.png';
import categoryFour from '../assets/images/category-img4.png';
import categoryFive from '../assets/images/category-img5.png';
import categorySix from '../assets/images/category-img6.png';

const SectionFour = () => {
  return (
    <div className="section-four flex flex-col font-medium lg:items-center lg:justify-between xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12">
        <h1 className="font-league text-3xl font-bold py-4 align-left w-full uppercase">explore <br/><span className="pl-18">categories</span></h1>
        <div className='flex flex-col md:flex-wrap md:flex-row gap-6 2xl:gap-11'>
          
          <div className='md:w-[48%] lg:w-[27%] '>
              <p className="font-league text-xl font-bold py-4 ">30+ Categories</p>
              <img className='  ' src={categoryOne} alt="category-img1" />
          </div>
          <img className='md:w-[48%] lg:w-[40%]' src={categoryTwo} alt="category-img2" />
          <img className='md:w-[48%] lg:w-[27%] lg:h-[80%] lg:mt-12' src={categoryThree} alt="category-img3" />
          <img className='md:w-[48%] lg:w-[27%] lg:ml-5 lg:-mt-5 lg:h-[80%]' src={categoryFour} alt="category-img4" />
          <img className='md:w-[48%] lg:w-[35%] lg:h-[75%]' src={categoryFive}  alt="category-img5" />
          <img className='md:w-[48%] lg:w-[27%] lg:-mt-5 lg:h-[80%] ' src={categorySix}  alt="category-img6" />
        </div>
      </div>
  )
}

export default SectionFour