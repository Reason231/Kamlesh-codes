import {  Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

export const Homenavbar=()=>{
    return(
        <>


<Navbar fluid rounded className="bg-orange-500 sticky top-0 z-20 midmobile:w-[99vw]">
      <Navbar.Brand>
        <img src="https://icms-image.slatic.net/images/ims-web/e6ac6883-1158-4663-bda4-df5a1aa066e5.png" className="mr-3 md:2 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            

        <div className="relative w-[50vw] rounded-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-xl border-s-gray-50 border-s-2 border border-gray-300 focus:ring-[FFE1D2]  focus:border-[FFE1D2] dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search in Daraz" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-[FFE1D2] rounded-e-lg border border-[FFE1D2]  hover:bg-[FFE1D2]  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>

        </span>


      </Navbar.Brand>
      <div className="flex md:order-2 ">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-white"> Home</Navbar.Link>
        <NavLink to="/About" className={( {isActive}) => isActive ? 'text-slate-600' : " " +"text-white"}>About &rarr;</NavLink>
        <NavLink to="/Services" className={( {isActive}) => isActive ? 'text-slate-600' : " " +"text-white"}>Services</NavLink>
        <NavLink to="/Pricing" className={( {isActive}) => isActive ? 'text-slate-600' : " " +"text-white"}>Pricing</NavLink>
        <NavLink to="/Contact" className={( {isActive}) => isActive ? 'text-slate-600' : " " +"text-white"}>Contact</NavLink>
      </Navbar.Collapse>
    </Navbar>
        </>

    )
} 