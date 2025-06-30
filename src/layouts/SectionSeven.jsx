
import imagesevena from '../assets/images/section-4-1.png'

const SectionSeven = () => {
  return (
    <div   className="section-seven flex flex-col font-medium lg:items-center lg:justify-between xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12  ">
        <h1   className="font-league text-3xl font-bold py-4 uppercase">Latest TECHNOLOGY</h1>
        <p className="text-xs font-info text-gray-500">"Al art is where imagination meets innovation, transforming pixels into pieces of wonder."</p>
        
        <div className="mini-nab my-4 flex items-center gap-2 text-xs capitalize ">
          <a className="font-medium bg-black text-white px-4 py-1">technology</a>
          <a className="font-medium">generative</a>
          <a className="font-medium">neural</a>
          <a className="font-medium">pixel art</a>
          <a className="font-medium">fractal</a>
        </div>
        <div className="show-img">

          <div className='' >
            <img src={imagesevena} alt="" />
            <h2 className='absolute'>discover the magic of ai generated art</h2>
            <h6 className='absolute'>by pixel ai dec 25 2024</h6>
          </div> 
          {/* similary 3 */}

        </div>
      </div>
  )
}

export default SectionSeven