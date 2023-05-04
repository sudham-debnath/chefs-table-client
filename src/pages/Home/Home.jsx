/* eslint-disable no-unused-vars */
import React from 'react';
import Chefs from '../Chefs/Chefs';

const Home = () => {
  return (
    <div>
      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 bg-slate-100">
        <div className=" p-16 ">
          <h1 className="text-5xl font-bold">Best Pizza </h1>
          <span className="text-5xl font-bold text-indigo-700">in Town</span>
          <p className="py-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div>
          <img src="https://i.ibb.co/WfnFzKy/hands-taking-slices-italian-cuisine-pizza.png" alt="" />
        </div>
      </div>


      {/* Food Category List */}

      <div className="p-14">
        <div className=" text-center my-10">
          <h1 className=" text-3xl p-5 font-bold">Food Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20">
          <div className=" bg-slate-100 p-6 rounded  ">
            <div className="bg bg-slate-200 p-3 w-16 rounded">
              <img src="https://i.ibb.co/7jYwK05/accounts-1.png" alt="" />
            </div>
            <h1 className=" text-xl text-bold py-4">Italian Cuisine</h1>
            <p className="font-medium">167+ Recipes Available</p>
          </div>
          <div className=" bg-slate-100 p-6 rounded">
            <div className="bg bg-slate-200 p-3 w-16 rounded">
              <img src="https://i.ibb.co/Bz90HMf/business-1.png" alt="" />
            </div>
            <h1 className=" text-xl text-bold py-4">American Cuisine</h1>
            <p className="font-medium">100+ Recipes Available</p>
          </div>
          <div className=" bg-slate-100 p-6 rounded">
            <div className="bg bg-slate-200 p-3 w-16 rounded">
              <img src="https://i.ibb.co/GdVhPww/social-media-1.png" alt="" />
            </div>
            <h1 className=" text-xl text-bold py-4">Mexican Cuisine</h1>
            <p className="font-medium">156+ Recipes Available</p>
          </div>
          <div className=" bg-slate-100 p-6 rounded">
            <div className="bg bg-slate-200 p-3 w-16 rounded">
              <img src="https://i.ibb.co/Dz3NpqJ/chip-1.png" alt="" />
            </div>
            <h1 className=" text-xl text-bold py-4">Chinese Cuisine</h1>
            <p className="font-medium">135+ Recipes Available</p>
          </div>
        </div>
      </div>



      {/* Our Best Chefs */}
      <div>

      <div className=" text-center my-10">
          <h1 className="text-3xl p-5 font-bold">Our Best Chefs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

      <Chefs></Chefs>
      </div>

    </div>
  );
};

export default Home;