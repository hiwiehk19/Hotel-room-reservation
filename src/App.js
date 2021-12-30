import React from "react";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeaturedRooms from "./components/FeaturedRooms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route exact path="/featured-rooms" element={<FeaturedRooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRooms />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
