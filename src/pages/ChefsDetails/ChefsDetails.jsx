/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from '@heroicons/react/24/solid'

const ChefsDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [chef, setChef] = useState({});

  // console.log(chef.recipes[0]);

  useEffect(() => {
    fetch(`https://chefs-table-server-sudham-debnath.vercel.app/allData/${id}`)
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);

  return (
    <div className="flex gap-10 m-10">

      {/* Chefs Details Section */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="" src={chef.picture} alt={chef.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{chef.name}</div>
          <p className="text-gray-700 text-base">Bio: {chef.bio}</p>
        </div>
        <div className="px-6 py-4 flex">
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Cuisine: {chef.cuisine}
          </span>
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Likes: {chef.likes}
          </span>
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700">
            Years of experience: {chef.years_experience}
          </span>
        </div>
      </div>


      {/* Chefs Recipe Section */}
      {chef.recipes && Array.isArray(chef.recipes) && (
        <div>
          <h3 className=" font-bold">Recipes</h3>
          {chef.recipes.map((recipe, index) => (
            <div key={index}>
              <StarIcon className=" w-10"></StarIcon>
              <h4 className=" font-bold">{recipe.name}</h4>
              <p>Ingredients:{recipe.ingredients}</p>
              <p>Cooking Method:{recipe.cooking_method}</p>
              <p className=" font-bold">Rating: {recipe.rating}</p>
              <p>Favorite: {recipe.favorite ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default ChefsDetails;
