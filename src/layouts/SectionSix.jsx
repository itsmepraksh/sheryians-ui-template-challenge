import Button from "../components/Button"

import sectionFive from "../assets/images/section-5.png"

 

const SectionSix = () => {
  return (
    <div  className="section-six flex flex-col font-medium lg:items-center lg:justify-between xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12 bg-black text-white">
        <h1  className="font-league text-3xl font-bold py-4 uppercase">START YOUR REVOLUTIONIZING JOURNEY!</h1>

        <Button styling={'text-black bg-white w-[50%] text-center py-3 mt-4'} text={'Get Started'}/>
        <Button styling={'bg-black w-[50%] py-3 border-[1px] mt-4 text-center'} text={'Start Creating'}/>
        <div className="btn"></div> 
        <img src={sectionFive} className="my-4" alt="hero-img" />
      </div>
  )
}

export default SectionSix