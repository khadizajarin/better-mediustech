import Image from 'next/image';
import { IoStarSharp } from "react-icons/io5";
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500','700'], 
});


const Banner2 = () => {
  return (
    <div className="bg-secondary min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-12" style ={{fontFamily: ubuntu.style.fontFamily}}>
      <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image width={400} height={800}
            src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp"
            alt="Customer testimonial"
            className="w-[22rem] h-[38rem] "
          />
          {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
            <p className="text-sm italic mb-2">”The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.”</p>
            <p className="text-xs">Arian — Better Mortgage customer</p>
          </div> */}
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-8xl font-medium mb-4">Find out why we’re better.</h1>
        <button className="bg-primary hover:bg-green-800 text-secondary font-bold py-5 px-8 rounded-full mb-4">
          See all our stories
        </button>
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <span className="material-icons text-green-500"><IoStarSharp /></span>
          <span className="text-black text-opacity-65">Trustpilot</span>
          <span className="text-gray-500">Excellent <span className='ml-1'>4.4 out of 5</span> </span>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
