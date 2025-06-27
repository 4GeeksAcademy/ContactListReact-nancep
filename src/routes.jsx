import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<AddContact />} />
    </Routes>
  );
};

