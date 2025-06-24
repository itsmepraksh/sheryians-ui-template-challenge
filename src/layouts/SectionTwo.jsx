import dallE from "../assets/images/icon-one.png";
import midjournery from "../assets/images/icon-two.jpg";
import deepart from "../assets/images/icon-three.jpg";
import adobe from "../assets/images/icon-four.jpg";
const SectionTwo = () => {
  // flex flex-col font-medium items-center justify-between xl:justify-self-center xl:w-[80%]  2xl:w-[65%]  px-[2rem] md:px-[4rem] lg:px-[6rem]  py-7 md:py-12
  return (
    <div className="section-two flex gap-5 md:gap-10 flex-col md:flex-row font-medium items-center justify-between xl:justify-self-center  w-full xl:w-[80%] 2xl:w-[65%] px-[2rem] lg:px-[6rem]     py-7  ">
      <div className="support-by font-info text-zinc-800 text-lg w-full lg:w-1/2 ">
        <h1>Supported By:</h1>
        <div className="company-logo text-xs  flex gap-4 items-center justify-around w-full lg:w-[85%]  mt-4">
          <div>
            <img
              src={dallE}
              className="w-10  object-cover  rounded aspect-1/1"
              alt="dalle-img"
            />
            <p className="pt-4">Dell-E</p>
          </div>
          <div>
            <img
              src={midjournery}
              className="w-15 object-top object-cover rounded aspect-1/1"
              alt="midjournery-img"
            />
          </div>
          <div>
            <img
              src={deepart}
              className="w-10 rounded aspect-1/1"
              alt="deepart-img"
            />
            <p className="pt-4">Deepart</p>
          </div>
          <div>
            <img
              src={adobe}
              className="w-20 rounded object-cover  aspect-1/1  "
              alt="adobe-img"
            />
          </div>
        </div>
      </div>
      <div className="customer-data py-4  w-full lg:w-1/2 ">
        <div className="stats-info flex justify-around ">
          <div>
            <h1 className="font-league text-2xl font-bold">1M</h1>
            <p className="text-[0.7rem] font-medium">Users</p>
          </div>
          <div>
            <h1 className="font-league text-2xl font-bold">50M</h1>
            <p className="text-[0.7rem] font-medium">Impressions</p>
          </div>
          <div>
            <h1 className="font-league text-2xl font-bold">500K</h1>
            <p className="text-[0.7rem] font-medium">Happy Clients</p>
          </div>
        </div>
        <div className="flex items-center justify-self-end justify-between mt-8 w-full lg:w-[85%]  ">
          <div className="flex  w-1/3 ">
            <img
              className="w-9  h-9 rounded-full object-cover object-top"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="w-9 -ml-3 h-9 rounded-full object-cover object-top"
              src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="w-9 -ml-3 h-9 rounded-full object-cover object-top"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-2/3">
            <h1 className=" font-info leading-[1.2]">Millions Of Happy Customers</h1>
            <p className="text-xs mt-2">AI tools to help design & create</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
