import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchCategory from "./components/SearchCategory";
import Footer from "./components/Footer";
import AllExercises from "./components/AllExercises";
import ExerciseDetail from "./components/ExerciseDetail";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/fithub-gym">
        <Navbar />
        <Routes>
          <Route path="/fithub-gym" element={<Home />} />
          <Route path="/allexercises" element={<AllExercises />} />
          <Route path="/exercises/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/searchCategory" element={<SearchCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
