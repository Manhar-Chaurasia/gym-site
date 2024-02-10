import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { setSpecificBodyPartData } from "../features/newSlice";
import FilteredExerciseCard from "./FilteredExerciseCard";

const SearchCategory = () => {
  const [searchedBodyPartName, setSearchedBodyPartName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const bodyPartNames = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
  ];

  const getDataByBodyPartName = (bodyPartName) => {
    setErrorMessage(null);
    setIsLoading(true);
    fetchDataFromApi(`exercises/bodyPart/${bodyPartName}`).then((res) => {
      console.log("from boxes: ", res);
      dispatch(setSpecificBodyPartData(res));
      setIsLoading(false);
    });
  };

  const isAvailableBodyPart = () => {
    return bodyPartNames.includes(searchedBodyPartName.toLowerCase());
  };

  const handleInput = (e) => {
    e.preventDefault();
    setSearchedBodyPartName(e.target.value);
  };

  const handleSearch = () => {
    setErrorMessage(null);
    if (searchedBodyPartName.trim() !== "" && isAvailableBodyPart()) {
      setIsLoading(true);
      fetchDataFromApi(`exercises/bodyPart/${searchedBodyPartName}`).then(
        (res) => {
          console.log("from search func: ", res);
          dispatch(setSpecificBodyPartData(res));
          setIsLoading(false);
        }
      );
    } else {
      setErrorMessage("OOPS! No such body part exercise exist 🫤");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="search-section container mx-auto px-6 md:px-20">
        <div className="flex justify-center">
          <input
            type="text"
            className="w-4/5 text-black outline-none focus:outline-none border-2 focus:border-pink-500 p-1 text-sm"
            placeholder="Search Exercises..."
            value={searchedBodyPartName}
            onChange={handleInput}
            onKeyUp={handleKeyPress}
          />
          <button
            className="px-3 py-2 bg-pink-500 text-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <p
          className={`text-center text-3xl text-red-600 my-10 transition-opacity duration-500 ease-in ${
            errorMessage ? "opacity-100" : "opacity-0"
          }`}
        >
          {errorMessage}
        </p>

        <div className="w-full overflow-x-auto flex space-x-5 items-center justify-start mt-0 md:mt-20">
          {bodyPartNames.map((item, idx) => (
            <div
              key={idx}
              onClick={() =>
                getDataByBodyPartName && getDataByBodyPartName(item)
              }
              className=" text-center w-full lg:p-5 p-2 bg-pink-500 text-xs rounded-sm cursor-pointer whitespace-nowrap"
            >
              <span className="">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center lg:justify-between mt-16">
          <FilteredExerciseCard />
        </div>
        {isLoading && (
          <p className="text-center text-3xl text-pink-500 my-10">Loading...</p>
        )}
      </div>
    </>
  );
};

export default SearchCategory;
