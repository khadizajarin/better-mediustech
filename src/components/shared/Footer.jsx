
import { LuWarehouse } from "react-icons/lu";
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500','700'], 
});


const Footer = () => {
  return (
    <div className="bg-white py-8 lg:px-20">
      <h2 className="text-2xl font-extrabold text-primary mb-4">Better</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        <div>
          <p style ={{fontFamily: ubuntu.style.fontFamily}}>Better is a family of companies serving all your homeownership needs.</p>
          <div className="mt-4">
            <h3 className="mb-1 text-xl font-semibold text-primary">Better <span className="text-gray-300 text-lg" style ={{fontFamily: ubuntu.style.fontFamily}}>Mortgage</span> </h3>
            <p className="text-xs mb-2" style ={{fontFamily: ubuntu.style.fontFamily}}>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
            <h3 className="mb-1 text-xl font-semibold text-primary mt-4">Better <span className="text-gray-300 text-lg" style ={{fontFamily: ubuntu.style.fontFamily}}> Real Estate</span></h3>
            <p className="text-xs mb-2" style ={{fontFamily: ubuntu.style.fontFamily}}>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
            <h3 className="mb-1 text-xl font-semibold text-primary mt-4">Better <span className="text-gray-300 text-lg" style ={{fontFamily: ubuntu.style.fontFamily}}>Cover</span> </h3>
            <p className="text-xs mb-2" style ={{fontFamily: ubuntu.style.fontFamily}}>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
            <h3 className="mb-1 text-xl font-semibold text-primary mt-4">Better <span className="text-gray-300 text-lg" style ={{fontFamily: ubuntu.style.fontFamily}}>Inspect</span> </h3>
            <p className="text-xs mb-2" style ={{fontFamily: ubuntu.style.fontFamily}}>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
            <h3 className="mb-1 text-xl font-semibold text-primary mt-4">Better <span className="text-gray-300 text-lg" style ={{fontFamily: ubuntu.style.fontFamily}}>Settlement Services</span> </h3>
            <p className="text-xs mb-2" style ={{fontFamily: ubuntu.style.fontFamily}}>Get transparent rates when you shop for title insurance all in one convenient place.</p>
          </div>
        </div>
        <div style ={{fontFamily: ubuntu.style.fontFamily}}>
          <h3 className="text-xl font-bold mb-4" >Resources</h3>
          <ul>
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
            <li>Mortgage calculator with PMI</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
            <li>HELOC vs cash-out refinance calculator</li>
            <li>Buy a home</li>
            <li>Sell a home</li>
            <li>Get home inspection</li>
          </ul>
        </div>
        <div style ={{fontFamily: ubuntu.style.fontFamily}}>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Learning center</li>
            <li>FAQs</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div style ={{fontFamily: ubuntu.style.fontFamily}}>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>hello@better.com</p>
          <p>415-523-8837</p>
          <p>FAQ</p>
          <p>Glossary</p>
          <h3 className="text-xl font-bold mt-4">Legal</h3>
          <ul>
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliated Business</li>
            <li>Browser Disclaimer</li>
          </ul>
          <div className="flex space-x-2 mt-4">
            <LuWarehouse className="w-7 h-7" />
            <LuWarehouse className="w-7 h-7"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
