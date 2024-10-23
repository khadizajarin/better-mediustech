import Image from 'next/image';
import { MdLocalPhone } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";
import { Ubuntu } from 'next/font/google';
import { FaPercent, FaDollarSign, FaMobileAlt } from 'react-icons/fa';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500','700'], 
});



const Start = () => {
  return (
    <div className=" bg-secondary flex flex-col items-center justify-center max-w-6xl mx-auto mb-10">
      <header className="w-full flex justify-between items-center py-4 px-8 bg-white">
        <div className="text-primary flex flex-col gap-0 leading-0 font-bold text-lg">Better <span className="text-gray-300 text-lg" style ={{fontFamily: ubuntu.style.fontFamily}}>Mortgage</span> </div>
        <div className="flex items-center space-x-4" style ={{fontFamily: ubuntu.style.fontFamily}}>
          <a href="tel:+14155238837" className="flex items-center text-primary">
          <MdLocalPhone className="bg-primary bg-opacity-25 rounded-full w-10 h-10 mr-2 p-2 " />
            Need help? Call (415) 523 8837
          </a>
        </div> 
      </header>
      
      <hr className="my-6" />

      <main className="flex flex-col items-center text-center" style ={{fontFamily: ubuntu.style.fontFamily}}>
        <h1 className="text-3xl font-bold mt-8">Hi, I&apos;m Betsy!</h1>
        <h2 className="text-2xl mt-4">What can I help you with?</h2>
        <div className="mt-8 space-y-4 w-full max-w-md text-primary">
          <button className="flex items-center justify-between w-full py-4 px-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
            <div className="flex items-center">
              <TbHomeDollar />
              Buying a home
            </div>
          </button>
          <button className="flex items-center justify-between w-full py-4 px-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary flex flex-col"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l1.29-1.29a1 1 0 011.42 0l2.3 2.3a1 1 0 010 1.42L6 14m8-8h6m0 0v6m0-6L12.41 12.41a1 1 0 01-1.41 0l-1.29-1.3a1 1 0 00-1.42 0l-2.3 2.3a1 1 0 000 1.42L6 18m2 2l4-4m4 4h6m0 0v6m0-6L12.41 22.41a1 1 0 01-1.41 0l-1.29-1.3a1 1 0 00-1.42 0l-2.3 2.3a1 1 0 000 1.42L6 30"
                ></path>
              </svg>
              Refinance my mortgage
            </div>
          </button>
          <button className="flex items-center justify-between w-full py-4 px-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary flex flex-col"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l1.29-1.29a1 1 0 011.42 0l2.3 2.3a1 1 0 010 1.42L6 14m8-8h6m0 0v6m0-6L12.41 12.41a1 1 0 01-1.41 0l-1.29-1.3a1 1 0 00-1.42 0l-2.3 2.3a1 1 0 000 1.42L6 18m2 2l4-4m4 4h6m0 0v6m0-6L12.41 22.41a1 1 0 01-1.41 0l-1.29-1.3a1 1 0 00-1.42 0l-2.3 2.3a1 1 0 000 1.42L6 30"
                ></path>
              </svg>
              Get cash from my home
            </div>
          </button>
        </div>
        <div className="mt-12 flex space-x-16 text-center">
          <div>
            <div className="text-3xl font-bold">$100B</div>
            <div className="text-gray-500">home loans funded entirely online</div>
          </div>
          <div>
            <div className="text-3xl font-bold">400K</div>
            <div className="text-gray-500">customers who chose a Better Mortgage</div>
          </div>
        </div>
      </main>


      <div className="bg-green-100 mt-10 px-16 py-6 rounded-lg text-center">
        <p className="mb-4">After a few questions, you&apos;ll unlock:</p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-start space-x-2">
            <FaPercent className="text-primary" />
            <span>Custom mortgage rates</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaDollarSign className="text-primary" />
            <span>Exclusive offers</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMobileAlt className="text-primary" />
            <span>A personalized dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
