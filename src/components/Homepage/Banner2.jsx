import Image from 'next/image';
import React from 'react';

const Banner2 = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-12">
      <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image width={200} height={400}
            src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp"
            alt="Customer testimonial"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
            <p className="text-sm italic mb-2">”The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.”</p>
            <p className="text-xs">Arian — Better Mortgage customer</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Find out why we’re better.</h1>
        <button className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-full mb-4">
          See all our stories
        </button>
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <span className="material-icons text-green-500">star_rate</span>
          <span className="text-green-900">Trustpilot</span>
          <span className="text-gray-700">Excellent 4.4 out of 5</span>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
