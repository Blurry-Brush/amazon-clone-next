import React from "react";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "@/Context/StateProvider";
import {auth} from "../firebase";
import { useRouter } from "next/router";
function Navbar() {

  const [{basket,user},dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
  
  const router = useRouter();

  const handleCheckoutRoute = () => {
    user ? router.push("/checkout") : router.push("/login");
  }


  return (
    <nav className="w-full bg-[#03001C] py-3 flex items-center gap-3 px-3 justify-around sm:justify-none">
      <div className={'cursor-pointer'} onClick={ () => {router.push("/")}}>
        <img
          className="w-24 object-contain "
          src="/AMZN_BIG.D.png"
          alt="amazon-logo"
        />
      </div>

      <div className="hidden sm:flex items-center bg-yellow-500 hover:bg-yellow-600 flex-grow rounded">
        <input type="text" className="focus:outline-none w-6 flex-grow py-[2px] rounded-l px-1"></input>
        <SearchIcon className="mx-1 cursor-pointer" />
      </div>

      <div onClick={handleAuthentication} className="text-white flex flex-col items-start">
        <h1 className="text-xs">Hello {!user ? "Guest" : user.email} </h1>
        <a href={user ? "" : "/login"} className="text-sm font-bold">{!user ?  'Sign In' : 'Sign Out'} </a>
      </div>

      <div className="text-white flex flex-col items-start">
        <h1 className="text-xs">Returns</h1>
        <button className="text-sm font-bold">& Orders</button>
      </div>

      <div className="text-white flex flex-col items-start">
        <h1 className="text-xs">Your</h1>
        <button className="text-sm font-bold">Prime</button>
      </div>

      <div className="flex items-center gap-2 cursor-pointer">
        <ShoppingBasketIcon onClick={handleCheckoutRoute} className="text-white w-auto h-8" />
        <h1 className="text-white font-semibold text-lg">{basket?.length}</h1>
      </div>
    </nav>
  );
}

export default Navbar;
