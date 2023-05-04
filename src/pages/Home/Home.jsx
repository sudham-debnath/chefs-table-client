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
      <Chefs></Chefs>
    </div>
  );
};

export default Home;