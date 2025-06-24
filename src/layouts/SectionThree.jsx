 import img from '../assets/images/main-hero-2.png'
import MagicBtn from '../components/MagicBtn'

const SectionThree = () => {
  return (
    <div className="section-three mt-10 flex flex-col font-medium items-center justify-between  xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12 ">
        <h1 className="font-league font-bold uppercase text-3xl w-full md:flex md:justify-self-start  " >Magical pixel-based <br className='hidden md:inline'/> art</h1>
        
        <div className='md:flex md:gap-5 md:items-center  '> 
          <img src={img} className='rounded-none my-4  md:w-1/2' alt="hero-img-2" />
          <div>
            <p className='font-medium font-info'>PixelAlchemy</p>
            <h1 className='font-league text-3xl font-bold py-4 uppercase'>Explore the magic of pixelai</h1>
            <p className='text-xs font-info text-gray-500'>PixelAlchemy is a unique platform where technology and creativity blend seamlessly to produce captivating Al-generated art. Designed for artists, enthusiasts, and newcomers alike, PixelAlchemy provides an immersive space to explore</p>
          
            <MagicBtn styling={'bg-transparent mt-8 '} fontstyle={'bg-yellow-400 !py-2 !px-[0.5rem] xl:text-2xl'} textstyle={'!bg-white !text-sm'}/>
          </div>
        </div>
      </div>
  )
}

export default SectionThree