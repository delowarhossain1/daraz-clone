import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import darazOfferCard from "../../../images/navbar/navbar-offer-img.png";
import darazLogo from "../../../images/navbar/logo.png";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("info/navbarLinks.json")
      .then((res) => res.json())
      .then((menu) => setMenus(menu));
  }, []);

  return (
    <>
      <div className="flex align-center justify-center py-2 space-x-4 primary-bg">
        {menus?.map((menu) => (
          <NavbarMenu key={menu.id} link={menu.link} text={menu.text} />
        ))}
      </div>

      {/* Navbar bottom */}

      <nav className="flex  bg-white w-[95%] mx-auto py-3">
        <div className=" w-2/12">
          <img src={darazLogo} alt="daraz logo" className=" w-32 float-left" />
        </div>

        <div className="w-8/12 flex items-center">
          <div className="w-10/12 relative">
            <input
              type="search"
              placeholder="Search in Daraz"
              className="w-full primary-bg py-3 pl-2 pr-16 pr-18 outline-none"
            />
            <button className="py-3 px-4 text-white drz-bg absolute right-0">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>


            <button className="ml-5">
              <FontAwesomeIcon icon={faCartShopping} className='text-2xl'/>
            </button>

        </div>

        <div className=" w-2/12">
          <img
            src={darazOfferCard}
            alt="daraz offer card"
            className=" w-44 float-right"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
