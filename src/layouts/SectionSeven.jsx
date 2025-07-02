
import imagesevenc from '../assets/images/section-4-1.png'
import imagesevenb from '../assets/images/section-7-2.png'
import SevenImgBox from '../components/SevenImgBox'
import imagesevena from '../assets/images/category-img4.png'

const SectionSeven = () => {
  return (
    <div   className="section-seven flex flex-col font-medium lg:items-center lg:justify-between xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12 lg:py-15 ">
       <div className='flex flex-col md:flex-row md:justify-between md:items-start md:py-4 '>
          <h1   className="font-league text-3xl md:text-4xl xl:text-5xl font-bold py-4 md:py-0 uppercase md:w-1/2">Latest TECHNOLOGY</h1>
        <p className="text-xs md:text-sm font-info text-gray-500 md:w-[40%] ">"Al art is where imagination meets innovation, transforming pixels into pieces of wonder."</p>  
       </div>
      
        <div className="mini-nab my-4 flex items-center justify-evenly gap-2 text-xs md:text-sm capitalize w-full ">
          <a className="font-medium bg-black text-white px-4 py-1">technology</a>
          <a className="font-medium">generative</a>
          <a className="font-medium">neural</a>
          <a className="font-medium">pixel art</a>
          <a className="font-medium">fractal</a>
        </div>
        <div className="show-img flex flex-col md:flex-row gap-5 md:gap-4  ">

         

          <SevenImgBox imageseven={imagesevena} h2text={'DISCOVER THE MAGIC OF AI-GENERATED ART'} h6text={'By: PixelAl Dec 25, 2024'} />
          <SevenImgBox imageseven={imagesevenb} h2text={'TRANSFORMING IDEAS INTO ART'} h6text={'By: PixelAl Dec 25, 2024'}/>
          <SevenImgBox imageseven={imagesevenc} h2text={'INFINITE CREATIVITY, ONE CLICK AWAY'} h6text={'By: PixelAl Dec 25, 2024'} />
           

        </div>
      </div>
  )
}

export default SectionSeven