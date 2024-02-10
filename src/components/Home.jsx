import React, { useEffect } from "react";
import heroImg from "../assets/hero-img.png";
import SearchCategory from "./SearchCategory";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const showSuggestedExercises = () => {
    navigate("/allexercises");
  };

  return (
    <>
      <div className="hero-section container mx-auto px-6 md:px-20 mt-8 md:mt-0 mb-16">
        <div className="main flex justify-between items-center">
          <div className="left">
            <span className="text-lg md:text-xl font-semibold text-pink-500">
              Fitness Club
            </span>
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold mt-6">
              Sweat, Smile
            </p>
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
              and Repeat
            </p>
            <span className="mb-6 text-xs md:text-sm text-slate-300 ">
              Check out the most efective exercises personalized to you!
            </span>
            <br />

            <button
              className="px-3 py-2 bg-pink-500 text-xs md:text-sm rounded-3xl mt-6"
              onClick={showSuggestedExercises}
            >
              Explore Exercises
            </button>
          </div>
          <div className="right md:mr-10">
            <img
              src={heroImg}
              alt="hero-img"
              className="w-auto md:block hidden "
            />
          </div>
        </div>
      </div>
      <SearchCategory />
    </>
  );
};

export default Home;
