import Baritems from "./Baritems";

const SlideBar = ({styling}) => {
  return (
    <div className={`slideBar flex justify-self-center w-full font-info ${styling}`}>
      <Baritems text={'AI TECHNOLOGY'} classname={'bg-blue-500'} />
      <Baritems text={'SHERYIANS'} classname={'bg-yellow-300'} />
      <Baritems text={'GOLUS'} classname={'bg-pink-400'} />
      <Baritems text={'ITSMEPRAKSH'} classname={'bg-cyan-300'} /> 
      <Baritems text={'AI TECHNOLOGY'} classname={'bg-blue-500'} />
      <Baritems text={'SHERYIANS'} classname={'bg-yellow-300'} />
      <Baritems text={'GOLUS'} classname={'bg-pink-400'} />
      <Baritems text={'ITSMEPRAKSH'} classname={'bg-cyan-300'} /> 
      <Baritems text={'AI TECHNOLOGY'} classname={'bg-blue-500'} />
      <Baritems text={'SHERYIANS'} classname={'bg-yellow-300'} />
      <Baritems text={'GOLUS'} classname={'bg-pink-400'} />
      <Baritems text={'ITSMEPRAKSH'} classname={'bg-cyan-300'} /> 
    </div>
  );
};

export default SlideBar;
