/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";

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

  const [favorites, setFavorites] = useState([]);

  function handleFavorite(index) {
    setFavorites([...favorites, index]);
    toast.info(`${chef.recipes[index].name} is now your favorite!`);
  }

  return (
    <div className="flex gap-10 m-10">
      {/* Chefs Details Section */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="" src={chef.picture} alt={chef.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{chef.name}</div>
          <p className="text-gray-700 font-semibold text-base">{chef.bio}</p>
        </div>
        <div className="px-6 py-4 flex flex-col gap-5">
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Cuisine: {chef.cuisine}
          </span>
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Number of Recipes: {chef.num_recipes}
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
        <div className=" bg-gray-100 p-5 rounded">
          <h3 className=" text-3xl font-bold">Recipes:</h3>
          {chef.recipes.map((recipe, index) => (
            <div className=" mt-5" key={index}>
              {/* <StarIcon className="w-8"></StarIcon> */}

              <h4 className=" font-bold">{recipe.name}</h4>

              <div>
                <p className=" font-bold">Ingredients:</p>
                <p>{recipe.ingredients}</p>
              </div>

              <div>
                <p className=" font-bold">Cooking Method:</p>
                <p>{recipe.cooking_method}</p>
              </div>

              <p className=" font-bold">Rating: {recipe.rating}</p>

              <p className=" text-2xl font-bold flex">
                Favorite:{" "}
                {favorites.includes(index) ? (
                  <button disabled>
                    <StarIcon className="w-8"></StarIcon>
                  </button>
                ) : (
                  <button onClick={() => handleFavorite(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </button>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChefsDetails;