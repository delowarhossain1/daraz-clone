import React from "react";
import categori1 from "../../../../images/categori/categori.gif";
import categori2 from "../../../../images/categori/categori-2.gif";
import categori3 from "../../../../images/categori/categori-3.gif";
import categori4 from "../../../../images/categori/categori-4.gif";
import { Link } from "react-router-dom";

const Categori = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 py-5">
      <Link to="/">
        <div className="flex items-center bg-white rounded-3xl py-1 px-2 hover:shadow-md cursor-pointer">
          <img src={categori1} alt="categori" className=" w-8 mr-2" />
          <span>Home & Living</span>
        </div>
      </Link>

      <Link to="/">
        <div className="flex items-center bg-white rounded-3xl py-1 px-2 hover:shadow-md cursor-pointer">
          <img src={categori2} alt="categori" className=" w-8 mr-2" />
          <span>Beauty & Glamour</span>
        </div>
      </Link>

      <Link to="/">
        <div className="flex items-center bg-white rounded-3xl py-1 px-2 hover:shadow-md cursor-pointer">
          <img src={categori3} alt="categori" className=" w-8 mr-2" />
          <span>Fashion</span>
        </div>
      </Link>

      <Link to="/">
        <div className="flex items-center bg-white rounded-3xl py-1 px-2 hover:shadow-md cursor-pointer">
          <img src={categori4} alt="categori" className=" w-8 mr-2" />
          <span>Mart</span>
        </div>
      </Link>

    </div>
  );
};

export default Categori;
