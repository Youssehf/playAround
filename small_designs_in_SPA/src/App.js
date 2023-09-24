import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Result } from "./components/Result";
import { NavBar } from "./Layout/NavBar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Footer } from "./Layout/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" Component={Home}></Route>
        <Route path="/projects" Component={Projects}></Route>
        <Route path="/team" Component={Team}></Route>
        <Route path="/result" Component={Result}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
