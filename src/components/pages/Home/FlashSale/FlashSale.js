import React, { useEffect, useState } from "react";
import FlashSaleCart from "../ProductCart/FlashSaleCart";

const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch('info/Products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  // Counter
  const date = new Date();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <section>
      <h2 className="text-2xl text-[#757575] mb-2">FlashSale</h2>

      <div className="bg-white p-3">
        {/* Heading */}
        <div className="flex items-center justify-between py-3 border-b  border-gray-300">
          <div className="flex items-center">
            <h4 className=" mr-16 drz-clr">On Sale Now</h4>

            <div className="flex items-center">
              <h4 className="mr-5">Ending in</h4>
              <span className="drz-bg  ml-3 w-10 h-10 flex items-center justify-center text-white rounded">
                {days}
              </span>
              <span className="drz-bg  ml-3 w-10 h-10 flex items-center justify-center text-white rounded">
                {hours}
              </span>
              <span className="drz-bg  ml-3 w-10 h-10 flex items-center justify-center text-white rounded">
                {minutes}
              </span>
              <span className="drz-bg ml-3 w-10 h-10 flex items-center justify-center text-white rounded">
                {seconds}
              </span>
            </div>
          </div>

          <button className=" w-36 h-10 border border-[#F57224] rounded">
            Shop more
          </button>
        </div>


            {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-5 space-x-3">
          {
            products?.map(product => <FlashSaleCart />)
          }
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
