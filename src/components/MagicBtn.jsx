import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

 

const MagicBtn = ({styling,fontstyle,textstyle}) => {
  return (
      <div className={`animate-btn bg-black   border-none  flex items-center  text-xs rounded-3xl gap-1 lg:gap-2 xl:gap-3 ${styling}`}>
                <FontAwesomeIcon
                  className={`bg-white text-black text-xl xl:text-3xl p-[0.2rem] xl:py-1 2xl:py-2 2xl:px-[0.5rem] m-[0.2rem]  rounded-full ${fontstyle}`}
                  icon={faWandMagicSparkles}
                />
                <p className={` bg-yellow-400 xl:text-lg  px-3 py-[10px] 2xl:py-4 font-info  active:scale-[0.9] rounded-3xl ${textstyle}`}>
                  Start Animating
                </p>
              </div>
  )
}

export default MagicBtn