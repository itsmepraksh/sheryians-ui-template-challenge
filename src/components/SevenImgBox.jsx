 

const SevenImgBox = ({imageseven,h2text,h6text}) => {
  return (
    <div className='relative text-white '>
      <img src={imageseven} alt="image-seven" />
      <h2 className="absolute bottom-6 left-5 font-bold md:text-xs">
         {h2text}
      </h2>
      <h6 className="absolute bottom-1 left-5 text-xs ">
         {h6text}
      </h6>
    </div>
  );
};

export default SevenImgBox;
