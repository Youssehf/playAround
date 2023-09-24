import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/Illustration Boy Avatar.png";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto h-[85vh]">
        <div className="row text-center flex justify-center items-center">
          <div className="col-sm-6">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to my humble page
            </h1>
            <p className="text-lg mb-8">
              Explore my latest and greatest creations that showcase my passion
              and innovation.
            </p>
            <p><strong>Today's Quote: </strong>Frontend developers don't sleep; they just enter 'display: none' mode.</p>
          </div>
          <div className="row  text-center flex justify-center items-center">
            <div className="col-12 w-auto h-auto flex">
              <img
                className="rounded-full overflow-hidden h-40"
                src={avatar}
                alt="..."
              />
            </div>
          </div>
          <div className="row  text-center flex justify-center items-center">
            <div className="col-12 flex justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-semibold px-6 py-3 rounded-full">
                <Link className="no-underline text-slate-700" to="/Projects">
                  Discover
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
