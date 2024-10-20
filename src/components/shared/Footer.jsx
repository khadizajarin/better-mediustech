import Image from 'next/image';
import { LuWarehouse } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-green-900 mb-4">Better</h2>
          <p>Better is a family of companies serving all your homeownership needs.</p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-green-900">Better Mortgage</h3>
            <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
            <h3 className="text-xl font-semibold text-green-900 mt-4">Better Real Estate</h3>
            <p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
            <h3 className="text-xl font-semibold text-green-900 mt-4">Better Cover</h3>
            <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
            <h3 className="text-xl font-semibold text-green-900 mt-4">Better Inspect</h3>
            <p>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
            <h3 className="text-xl font-semibold text-green-900 mt-4">Better Settlement Services</h3>
            <p>Get transparent rates when you shop for title insurance all in one convenient place.</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Resources</h3>
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
        <div>
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
        <div>
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
            <LuWarehouse />
            <LuWarehouse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
