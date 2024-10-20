import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center lg:pt-28 text-white">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="material-icons">trending_down</span>
          <h2 className="text-lg font-semibold">Rate drop alert</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          The rate drop you’ve been waiting for
        </h1>
        <div className="relative mb-8">
          <Image width={200} height={400}
            src="https://media.better.com/better-com/homepage/rate-drop-notify.webp"
            alt="Phone displaying rate drop notification"
            className="mx-auto w-3/4 md:w-1/2 lg:w-1/3"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <span className="material-icons text-green-600">notifications</span>
              <div>
                <p className="text-sm text-gray-800">Better Mortgage</p>
                <p className="text-xs text-gray-600">Rates have dropped. Act now!</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          Start my approval
        </button>
        <div className="mt-4 flex items-center space-x-2">
          <span className="material-icons text-yellow-400">star_rate</span>
          <span className="text-yellow-400">4.6 Stars | 3177 Google reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
