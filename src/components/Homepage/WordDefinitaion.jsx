import Image from 'next/image';
import React from 'react';

const WorkDefinition = () => {
  return (
    <div className="bg-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Got questions? We&apos;ve got answers</h1>
      </div>
      <div className="flex justify-center space-x-4 mb-12">
        <button className="bg-green-900 text-white font-bold py-2 px-4 rounded-full">Our products</button>
        <button className="bg-white text-green-900 font-bold py-2 px-4 rounded-full border border-green-900">Calculators</button>
        <button className="bg-white text-green-900 font-bold py-2 px-4 rounded-full border border-green-900">Guides & FAQs</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Buying your first home with Better</h2>
          <Image width={200} height={400} src="https://media.better.com/better-com/homepage/learning-center/first-home.webp" alt="First home" className="mb-4 rounded-lg"/>
          <button className="text-green-900 flex items-center space-x-2">
            <span>Learn More</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">One Day Mortgage<sup>1</sup></h2>
          <p className="mb-4">Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup></p>
          <Image width={200} height={400} src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp" alt="One Day Mortgage" className="mb-4 rounded-lg"/>
          <button className="text-green-900 flex items-center space-x-2">
            <span>Learn More</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Better HELOC</h2>
          <p className="mb-4">Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup></p>
          <Image width={200} height={400} src="https://media.better.com/better-com/homepage/learning-center/insurance.webp" alt="Better HELOC" className="mb-4 rounded-lg"/>
          <button className="text-green-900 flex items-center space-x-2">
            <span>Learn More</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Insurance</h2>
          <Image width={200} height={400} src="https://media.better.com/better-com/homepage/learning-center/insurance.webp" alt="Insurance" className="mb-4 rounded-lg"/>
          <button className="text-green-900 flex items-center space-x-2">
            <span>Learn More</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkDefinition;
