import Image from 'next/image';
import { FaArrowTrendDown } from "react-icons/fa6";
import { Ubuntu } from 'next/font/google';
import { IoMdStopwatch } from "react-icons/io";
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500','700'], 
});



const Banner = () => {
  return (
    <div className="relative bg-primary lg:pt-10 flex flex-col items-center justify-center text-secondary" style ={{fontFamily: ubuntu.style.fontFamily}}>


        <div className="flex items-center justify-center space-x-2 text-center mb-4">
          <span className=""><FaArrowTrendDown className='w-11 h-11 p-2 rounded-full bg-secondary text-violet-700' /></span>
          <h2 className="text-3xl font-thin">Rate drop alert</h2>
        </div>


        <h1 className="text-5xl md:text-9xl font-medium text-center ">
          The rate drop you’ve been waiting for
        </h1>


        <div className=" flex lg:flex-row justify-evenly gap-1 items-center">
          {/* approval button */}
          <div className='  '>
            <button className="bg-[#22C55E] text-black hover:bg-primary hover:text-secondary font-medium tracking-wide py-4 px-6 rounded-full">
              Start my approval
            </button>
            <div className='font-extralight w-full text-xs flex justify-center items-center gap-1 opacity-75'> <IoMdStopwatch />3 min | No credit impact</div>
            <div>

            </div>
          </div>

          {/* the phone image */}
          <Image width={600} height={700}
            src="https://media.better.com/better-com/homepage/rate-drop-notify.webp"
            alt="Phone displaying rate drop notification"
            className=""
          />

          {/* rating  */}
          <div className=" p-2 ">
              <span className=" text-3xl text-yellow-400 flex flex-row items-center justify-center space-x-3">
                  <FcGoogle />
                  <span className='flex flex-row text-lg space-x-1'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt/>
                  </span>
              </span>
              <span className="text-secondary text-xs">4.6 Stars | 3177 Google reviews</span>
          </div>
        </div>
    </div>
  );
};

export default Banner;
