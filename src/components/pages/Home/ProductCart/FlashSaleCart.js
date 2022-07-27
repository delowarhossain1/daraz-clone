import React from "react";

const FlashSaleCart = () => {
  return (
    <div className="p-2 shadow-md hover:shadow-lg cursor-pointer">
      <img
        src="https://static-01.daraz.com.bd/p/75fd345fc3920607b56d2f4d52ea958d.png"
        alt=""
      />
      <h2>Sky Half Sleeve T-shirt For Men (Wholesale Price)</h2>
      <h4 className="drz-clr">$120</h4>
      <h5 className="text-sm">
        <strike className="text-gray-400">$10</strike> -60%
      </h5>
    </div>
  );
};

export default FlashSaleCart;
