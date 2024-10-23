import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500','700'], 
});



const WorkDefinition = () => {
  return (
    <div className="bg-secondary py-8 lg:px-20" style ={{fontFamily: ubuntu.style.fontFamily}}>

      {/* title part */}
      <div className="flex justify-between mb-12">
        <div className="text-left mb-4">
          <h1 className="text-5xl font-bold mb-4">Got questions? <br /> We&apos;ve got answers</h1>
        </div>
        <div className="space-x-5">
          <button className="bg-secondary text-primary border-4 border-primary font-bold py-2 px-4 rounded-full">Our products</button>
          <button className="bg-secondary text-primary font-bold py-2 px-4 rounded-full border-[1px] hover:border-4 border-primary">Calculators</button>
          <button className="bg-secondary text-primary font-bold py-2 px-4 rounded-full border-[1px] hover:border-4 border-primary">Guides & FAQs</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* box 1 */}
        <div className="bg-primary bg-opacity-10 p-10 rounded-lg">
          <h2 className="text-2xl font-medium text-primary mb-4">Buying your first home with Better</h2>
          <button className="text-primary flex items-center space-x-2">
            <span className=" text-primary w-12 h-12 p-2 rounded-full flex justify-center items-center border-primary border-[1px] border-opacity-20 bg-transparent hover:bg-primary hover:text-secondary mb-6"><FaArrowRight /></span>
          </button>
          <Image width={600} height={800} src="https://media.better.com/better-com/homepage/learning-center/first-home.webp" alt="First home" className=" rounded-lg w-full"/>
        </div>

        {/* box 2 */}
        <div className="bg-primary bg-opacity-10 p-10 lg:col-span-2 rounded-lg flex lg:flex-row flex-col-reverse lg:justify-between space-x-4">
          <div className=''>
            <h2 className="text-2xl font-medium text-primary mb-4">One Day Mortgage<sup>1</sup></h2>
            <p className="mb-4 text-primary font-light text-xs tracking-wide leading-4">Kick your home loan into hyperdrive. Going from locked rate <br/> to Commitment Letter takes weeks for traditional lenders. We do it in a single <br/> day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup></p>
            <button className="text-primary flex items-center space-x-2">
              <span className="text-primary w-12 h-12 p-2 rounded-full flex justify-center items-center border-primary border-[1px] border-opacity-20 bg-transparent hover:bg-primary hover:text-secondary mb-6"><FaArrowRight /></span>
            </button>
          </div>
          <Image width={600} height={800} src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp" alt="One Day Mortgage" className=" rounded-lg w-72 h-72"/>
        </div>

        {/* box 3 */}
        <div className="bg-primary bg-opacity-10 p-10 lg:col-span-2 rounded-lg flex lg:flex-row-reverse flex-col lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-2xl font-medium text-primary mb-4">Better HELOC</h2>
            <p className="mb-4">Introducing One Day HELOC—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup></p>
            <button className="text-primary flex items-center space-x-2">
              <span className="text-primary w-12 h-12 p-2 rounded-full flex justify-center items-center border-primary border-[1px] border-opacity-20 bg-transparent hover:bg-primary hover:text-secondary mb-6"><FaArrowRight /></span>
            </button>
          </div>
          <Image width={600} height={800} src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp" alt="Better HELOC" className="w-72 h-72 rounded-lg"/>
        </div>

        {/* box 4 */}
        <div className="bg-primary bg-opacity-10 p-10 rounded-lg">
          <h2 className="text-2xl font-medium text-primary mb-4">Insurance</h2>
          <button className="text-primary flex items-center space-x-2">
            <span className="text-primary w-12 h-12 p-2 rounded-full flex justify-center items-center border-primary border-[1px] border-opacity-20 bg-transparent hover:bg-primary hover:text-secondary mb-6"><FaArrowRight /></span>
          </button>
          <Image width={600} height={800} src="https://media.better.com/better-com/homepage/learning-center/insurance.webp" alt="Insurance" className="mb-4 rounded-lg w-full"/>
        </div>
        
      </div>

      <hr className='border-[1px] border-gray-300 mt-20'/>
    </div>
  );
};

export default WorkDefinition;
