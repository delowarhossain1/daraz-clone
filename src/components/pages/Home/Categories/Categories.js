import React, { useEffect, useState } from "react";
import CategoriCart from "./CategoriCart";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("info/productCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="py-10">
      <h2 className="mb-4 text-2xl text-gray-600">Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 bg-white">
        {categories?.map((category) => (
          <CategoriCart key={Math.random} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
