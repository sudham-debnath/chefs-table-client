/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";
import { FaThumbsUp } from "react-icons/fa";

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
    <div className="flex flex-col">
      <h3 className="text-3xl text-center mt-10  font-bold">
        Chef's Recipes
      </h3>
      <div className=" gap-10 m-10">
        {/* Chefs Details Section */}
        {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 flex items-center gap-2">
            Likes: {chef.likes} <FaThumbsUp />
          </span>
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700">
            Years of experience: {chef.years_experience}
          </span>
        </div>
      </div> */}

        <section className="py-8">
          <div className="container px-4 mx-auto">
            <div className="px-7 py-6 bg-gray-100 shadow rounded">
              <div className="flex gap-16">
                <div className="w-full md:w-1/2 flex items-center">
                  <img className="mx-auto rounded" src={chef.picture} alt="" />
                </div>

                <div className="w-full md:w-1/2 pt-6 mb-10 md:mb-0">
                  <h3 className="mb-1 text-2xl font-bold text-white">
                    <span className="text-black">{chef.name}</span>
                    {/* <span>New Features</span> */}
                  </h3>
                  <p className=" mb-5 text-sm font-medium text-black">
                    {chef.bio}
                  </p>

                  <div className="flex flex-col gap-5 mb-5">
                    <span className="inline-block w-60 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      Cuisine: {chef.cuisine}
                    </span>
                    <span className="inline-block w-60 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      Number of Recipes: {chef.num_recipes}
                    </span>
                    <span className="inline-block w-60 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 flex items-center gap-2">
                      Likes: {chef.likes} <FaThumbsUp />
                    </span>
                    <span className="inline-block w-60 bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700">
                      Years of experience: {chef.years_experience}
                    </span>
                  </div>

                  <a
                    className="flex items-center text-black font-medium"
                    href="#"
                  >
                    <svg
                      className="mr-1"
                      width="14"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.92 6.62C11.8724 6.49725 11.801 6.38511 11.71 6.29L6.71 1.29C6.61676 1.19676 6.50607 1.1228 6.38425 1.07234C6.26243 1.02188 6.13186 0.995911 6 0.995911C5.7337 0.995911 5.4783 1.1017 5.29 1.29C5.19676 1.38324 5.1228 1.49393 5.07234 1.61575C5.02188 1.73758 4.99591 1.86814 4.99591 2C4.99591 2.2663 5.1017 2.5217 5.29 2.71L8.59 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734784 8 1 8H8.59L5.29 11.29C5.19627 11.383 5.12188 11.4936 5.07111 11.6154C5.02034 11.7373 4.9942 11.868 4.9942 12C4.9942 12.132 5.02034 12.2627 5.07111 12.3846C5.12188 12.5064 5.19627 12.617 5.29 12.71C5.38296 12.8037 5.49356 12.8781 5.61542 12.9289C5.73728 12.9797 5.86799 13.0058 6 13.0058C6.13201 13.0058 6.26272 12.9797 6.38458 12.9289C6.50644 12.8781 6.61704 12.8037 6.71 12.71L11.71 7.71C11.801 7.6149 11.8724 7.50275 11.92 7.38C12.02 7.13654 12.02 6.86346 11.92 6.62Z"
                        fill="#D7D5F8"
                      ></path>
                    </svg>
                    <span>Check Recipes</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chefs Recipes Section */}
        {chef.recipes && Array.isArray(chef.recipes) && (
          <div className=" bg-gray-100 p-5 m-5 shadow rounded">
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
    </div>
  );
};

export default ChefsDetails;
