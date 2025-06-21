import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const Baritems = ({text , classname}) => {
  return (
    <p className={`shrink-[0] px-8 py-2 ${classname}`}>        <FontAwesomeIcon className="text-lg " icon={faGlobe} /> {text}</p>
  )
}

export default Baritems