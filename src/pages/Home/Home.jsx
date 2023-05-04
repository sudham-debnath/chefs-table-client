/* eslint-disable react/no-unescaped-entities */
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
          If you're looking for the best pizza in town, look no further than our restaurant! Our pizzas are made with fresh, high-quality ingredients and baked to perfection for a mouthwatering taste that will leave you coming back for more.
          </p>
          <button className="btn btn-primary">Order Now!</button>
        </div>
        <div>
          <img src="https://i.ibb.co/WfnFzKy/hands-taking-slices-italian-cuisine-pizza.png" alt="" />
        </div>
      </div>


      {/* Food Category List */}

      <div className="p-14">
        <div className=" text-center my-10">
          <h1 className=" text-3xl p-5 font-bold">Our Best Food Category</h1>
          <p>
          Food can be divided into different categories based on various factors such as ingredients, cooking methods, and cultural origins. Some popular food categories include Italian cuisine, Asian cuisine, vegan food, and comfort food. Each category offers a unique range of flavors and options to suit every taste preference.
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

      <div className=" text-center my-10 p-14">
          <h1 className="text-3xl p-5 font-bold">Our Best Chefs</h1>
          <p>
          Our best chefs are highly skilled and experienced professionals who are passionate about creating delicious and innovative dishes. With their expertise and creativity, they constantly strive to push the boundaries of culinary artistry and deliver a memorable dining experience for our customers.
          </p>
        </div>

      <Chefs></Chefs>
      </div>


      {/* About Us */}
      
      <div className=" text-center my-14 p-14">
          <h1 className="text-3xl p-5 font-bold">About Us</h1>
          <p className=''>
          Italian cuisine is known worldwide for its simple yet delicious flavors and fresh ingredients. Italian restaurants typically offer a wide range of dishes including pasta, pizza, antipasti, and seafood. The cozy ambiance and warm hospitality of Italian restaurants make them a popular choice for both casual and formal dining.
          </p>
        </div>


    </div>
  );
};

export default Home;