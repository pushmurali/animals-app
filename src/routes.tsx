import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import WildAnimalsPage from "./pages/WildAnimals";
import DomesticAnimalsPage from "./pages/DomesticAnimals";
import BirdsPage from "./pages/Birds";
import Navigation from "./components/navigation/Navigation";
import AnimalsCreatePage from "./pages/AnimalsCreatePage";

const AppRoutes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="wild">
          <Route index element={<WildAnimalsPage />} />
          <Route path=":number" element={<WildAnimalsPage />} />
        </Route>
        <Route path="domestic" element={<DomesticAnimalsPage />} />
        <Route path="birds" element={<BirdsPage />} />
        <Route path="create" element={<AnimalsCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
