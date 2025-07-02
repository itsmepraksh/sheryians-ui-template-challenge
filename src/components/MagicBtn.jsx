import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

 

const MagicBtn = ({styling,fontstyle,textstyle}) => {
  return (
      <div className={`animate-btn bg-black   flex items-center  text-xs rounded-3xl gap-1 lg:gap-2 xl:gap-3 ${styling}`}>
                <FontAwesomeIcon
                  className={`${fontstyle} rounded-full`}
                  icon={faWandMagicSparkles}
                />
                <p className={`font-info  active:scale-[0.9] rounded-3xl ${textstyle}`}>
                  Start Animating
                </p>
              </div>
  )
}

export default MagicBtn