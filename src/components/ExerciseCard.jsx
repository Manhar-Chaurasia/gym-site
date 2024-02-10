import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ExerciseCard = () => {
  const storeData = useSelector((state) => state.new.allExercises);

  console.log("Exercise card: ", storeData);

  return (
    <>
      {storeData?.map((exercise) => (
        <Link key={exercise.id} to={`/exercises/exercise/${exercise.id}`}>
          <div className="w-72 md:w-80 relative my-5 md:my-10 rounded-2xl bg-white bg-opacity-25">
            <img
              src={exercise?.gifUrl}
              alt="exercise-gifs"
              className="rounded-2xl"
            />
            <div className="flex space-x-3 absolute left-1 top-[17rem] md:top-[19rem] ml-2">
              {exercise?.secondaryMuscles?.slice(0, 3).map((muscle, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-full bg-pink-500 text-sm"
                >
                  {muscle}
                </span>
              ))}
            </div>
            <div className="font-semibold text-xl mt-4 mb-1 px-5 py-2">
              {exercise?.name.charAt(0).toUpperCase() + exercise?.name.slice(1)}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ExerciseCard;
