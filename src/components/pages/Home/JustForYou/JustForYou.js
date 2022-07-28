import React from "react";
import JustForYouCart from "./JustForYouCart";

const JustForYou = () => {
  return (
    <section className="pt-10">
      <h2 className="text-2xl text-gray-500 mb-2">Just For You</h2>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mb-3">
        <JustForYouCart />
        <JustForYouCart />
        <JustForYouCart />
        <JustForYouCart />
        <JustForYouCart />
        <JustForYouCart />
      </div>

      <div className="flex justify-center">
        <button className="border border-orange-500 w-80 py-2 rounded my-3">
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default JustForYou;
