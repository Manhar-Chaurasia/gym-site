import React from "react";
import { useSelector } from "react-redux";
import { MdArrowForwardIos } from "react-icons/md";

const Details = () => {
  const exerciseDetail = useSelector((state) => state.new?.exerciseDetails);

  return (
    <>
      <div className="flex justify-between flex-wrap md:flex-nowrap">
        <img
          src={exerciseDetail?.gifUrl}
          className="md:mr-8 lg:mr-10"
          alt={exerciseDetail?.name}
        />
        <div className="ins">
          <p className="md:leading-[2.5rem] lg:leading-[4rem] text-2xl md:text-4xl font-semibold my-5 md:my-0">
            {exerciseDetail && exerciseDetail.name
              ? exerciseDetail.name.charAt(0).toUpperCase() +
                exerciseDetail.name.slice(1)
              : ""}
          </p>
          <p className="text-sm md:text-md md:mt-8 text-slate-300">
            {exerciseDetail?.instructions}
          </p>

          {exerciseDetail.secondaryMuscles &&
            exerciseDetail.secondaryMuscles.map((item, idx) => (
              <div className="flex space-x-4 items-center mt-6 " key={idx}>
                <span className="p-1 md:p-3 bg-pink-500 rounded-full">
                  <MdArrowForwardIos />
                </span>
                <span className="text-sm md:text-md text-slate-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Details;
