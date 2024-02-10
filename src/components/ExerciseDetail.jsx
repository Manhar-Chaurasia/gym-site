import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { setExerciseDetails } from "../features/newSlice";
import Details from "./Details";

const ExerciseDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const dispatch = useDispatch();
  const exerciseDetail = useSelector((state) => state.new.exerciseDetails);

  useEffect(() => {
    fetchDataFromApi(`exercises/exercise/${id}`)
      .then((res) => {
        dispatch(setExerciseDetails(res));
        console.log("exerciseDetail: ", exerciseDetail);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, id]);

  return (
    <>
      <div className="detail-section">
        <div className="exercise-detail-section container mx-auto px-6 md:px-20 mb-16 mt-16">
          <Details />
        </div>
      </div>
    </>
  );
};

export default ExerciseDetail;
