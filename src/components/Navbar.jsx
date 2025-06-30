import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar flex font-medium items-center justify-between xl:justify-self-center xl:w-[85%] 2xl:w-[75%]  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] py-7 md:pt-12 ">
      <h2>
        <FontAwesomeIcon className="text-lg " icon={faGlobe} /> PixelAI
      </h2>
      <div className="navlinks hidden lg:flex gap-10 text-sm text-gray-700 ">
        <a>Home</a>
        <a>Gallery</a>
        <a>Collection</a>
        <a>Pricing</a>
      </div>
      <div className="flex items-center  gap-2 md:gap-5">
        <Button styling={"bg-black text-white"} text={"Log in"} />
        <FontAwesomeIcon icon={faBars} className="block lg:!hidden " />
      </div>
    </div>
  );
};

export default Navbar;
