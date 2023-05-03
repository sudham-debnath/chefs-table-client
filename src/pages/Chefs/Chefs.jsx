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
    <div className="grid grid-cols-3 gap-4">
      {/* <h1 className="text-3xl font-bold underline">Chefs</h1> */}
      {chefsData.chefs &&
        chefsData.chefs.map((chef) => (
          <div className=" w-80" key={chef.id}>
            <div className="border border-lime-500">
              <div className="bg-whit shadow-lg rounded-lg overflow-hidden">
                <img className="w-60" src={chef.picture} alt={chef.name} />
                <div className="p-4">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    {chef.name}
                  </h2>
                  <p className="text-gray-700 font-bold mb-2">
                    {chef.yearsOfExperience} years of experience
                  </p>
                  <p className="text-gray-700 font-bold mb-2">
                    {chef.numRecipes} recipes
                  </p>
                  <p className="text-gray-700 font-bold mb-2">
                    {chef.likes} likes
                  </p>

                  <Link to={`/chefdetails/${chef?.id}`}>

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
