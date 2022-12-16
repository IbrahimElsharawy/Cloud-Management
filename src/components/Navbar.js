import React,{useState} from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="font-bold text-3xl mr-4 sm:text-4xl">BRAND.</h1>
        </div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Platforms</li>
          <li>Pricing</li>
        </ul>
        <div className="hidden md:flex">
          <button className=" bg-transparent text-indigo-600 mr-4 px-8 ">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
        {click ? <FaTimes className="w-5"/> :<FaBars className="w-5" />}
          
        </div>
      </div>
      <ul className={click ?"absolute bg-zinc-200 w-full px-8" : 'hidden'}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
      
    </div>
  );
};

export default Navbar;
