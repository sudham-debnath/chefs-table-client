/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setChefsData(data[0]));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mx-16">
      {/* <h1 className="text-3xl font-bold underline">Chefs</h1> */}
      {chefsData.chefs &&
        chefsData.chefs.map((chef) => (
          <div className=" w-80" key={chef.id}>
            <div className="border border-violet-600 rounded">
              <div className="shadow rounded overflow-hidden">
                <img className="w-60" src={chef.picture} alt={chef.name} />
                <div className="p-4">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    {chef.name}
                  </h2>
                  <p className="text-gray-700 font-bold mb-2">
                    {chef.years_experience} years of experience
                  </p>
                  <p className="text-gray-700 font-bold mb-2">
                    {chef.num_recipes} recipes
                  </p>
                  <p className="text-gray-700 font-bold mb-2">
                    {chef.likes} likes
                  </p>

                  <Link to={`/chefs/${chef?.id}`}>

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Recipes
                  </button>

                  </Link>

                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chefs;
