import { MdLocalPhone } from "react-icons/md";
import { Ubuntu } from 'next/font/google';
import Link from "next/link";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500','700'], 
});



const Navbar = () => {
    return (
        <div className="bg-primary">
            <div className="navbar text-secondary h-20 lg:max-w-[89rem] lg:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    {/* nav icon for medium and small screen */}
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                

                {/*  medium and small screen nav options */}
                <ul style ={{fontFamily: ubuntu.style.fontFamily}}
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-bold">
                    <li><a>Buy</a></li>
                    <li>
                    <details>
                    <summary>Refinance</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </details>
                    </li>
                    <li><a>HELOC</a></li>
                    <li><a>Rates</a></li>
                    <li><a>Better +</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-2xl">Better</a>

                    {/* large screen nav options */}
                <div className=" hidden lg:flex ">
                <ul className="menu menu-horizontal px-5 gap-10 text-bold" style ={{fontFamily: ubuntu.style.fontFamily}}>
                <li><a>Buy</a></li>
                <li>
                    <details>
                    <summary>Refinance</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>HELOC</a></li>
                <li><a>Rates</a></li>
                <li><a>Better +</a></li>
                </ul>
                </div>
            </div>
            
            <div className="navbar-end lg:mr-4 flex flex-row gap-8" style ={{fontFamily: ubuntu.style.fontFamily}}>
                <MdLocalPhone className="border-2 border-secondary border-opacity-50 rounded-full w-12 h-12 p-3 hover:bg-secondary hover:text-primary" />
                <a className="">Sign in</a>
                <Link href="/Start"><button className="bg-secondary text-primary font-bold py-2 px-4 rounded-full border-[1px]  border-primary"> Get Started</button></Link>
            </div>

            </div>
        </div>
        
    );
};

export default Navbar;