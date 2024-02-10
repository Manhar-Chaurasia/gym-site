import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import { useDispatch } from "react-redux";
import { setAllExerciseData } from "../features/newSlice";
import ExerciseCard from "./ExerciseCard";

const AllExercises = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataFromApi("exercises")
      .then((res) => {
        console.log(res);
        dispatch(setAllExerciseData(res));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <div className="hero-section container mx-auto px-6 md:px-20 mb-16">
        {isLoading && (
          <p className="text-center text-3xl text-pink-500 my-10">Loading...</p>
        )}
        <div className="flex flex-wrap justify-center lg:justify-between">
          <ExerciseCard />
        </div>
      </div>
    </>
  );
};

export default AllExercises;
