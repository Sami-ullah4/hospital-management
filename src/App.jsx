import React from "react";

import "./App.css";
import { Routers } from "./routers/Routers"; 
import { RouterProvider } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
      <RouterProvider router={Routers} />
  );
};

export default App;
