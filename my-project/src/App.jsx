import React from "react";
import PageRouter from "./PageRouter";
import logo from "../src/assets/eme.png";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <div className="h-16 bg-gray-400 flex items-center justify-between px-4 ">
        <div className="flex space-x-2 items-center h-full ">
          <img src={logo} alt="Logo" className="w-10 rounded-full" />
          <h1 className=" text-md font-bold text-gray-600 font-cursive uppercase">
            149 FD WKSP COY EME
          </h1>
        </div>
        <div className="flex space-x-8">
          <Link>
            <span>TYRE</span>
          </Link>
          <Link>
            <span>BTY</span>
          </Link>
          <Link to="/parts/blr">
            <span>PARTS</span>
          </Link>
        </div>
      </div>
      <PageRouter />
    </div>
  );
};

export default App;
