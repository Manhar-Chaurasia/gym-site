import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExercises: [],
  exerciseDetails: [],
  specifichBodyPartData: [],
};

export const newSlice = createSlice({
  name: "all",
  initialState,
  reducers: {
    setAllExerciseData: (state, action) => {
      state.allExercises = action.payload;
    },
    setExerciseDetails: (state, action) => {
      state.exerciseDetails = action.payload;
    },
    setSpecificBodyPartData: (state, action) => {
      state.specifichBodyPartData = action.payload;
    },
  },
});

export const {
  setAllExerciseData,
  setExerciseDetails,
  setSpecificBodyPartData,
} = newSlice.actions;

export default newSlice.reducer;
