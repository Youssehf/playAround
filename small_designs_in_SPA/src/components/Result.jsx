import React from "react";
import content from "../constantData";

export const Result = () => {
  return (
    <div className="container bg-slate-100 rounded-3xl">
      <div className="row justify-around p-5 rounded-xl">
        <div className="col-sm-11 col-md-5 pt-4 bg-indigo-500 rounded-3xl text-white text-center">
          <div className="row">
            <div className="col">
              <h2 className="text-slate-300">Your Result</h2>
            </div>
          </div>
          <div className="row py-12">
            <div className="col flex justify-center items-center">
              <div className="w-44 h-44 rounded-full bg-gradient-to-t from-indigo-500 to-indigo-700">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-6xl pt-11 pb-2">
                    76 <br />
                  </span>
                  <span className="text-gray-300">of 100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="font-semibold text-2xl">Great</p>
              <p className="px-3 text-slate-300 text-lg">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-11 col-md-5 pt-4">
          <div className="row">
            <div className="col">
              <h2 className="font-bold">Summary</h2>
            </div>
          </div>
          {content.map((item) => (
            <div
              className={`row py-3 my-3 rounded-xl ${item.style}`}
              key={item.id}
            >
              <div className="col flex justify-between">
                <div>
                  <img
                    className="inline px-3"
                    src={item.icon}
                    alt={item.category}
                  />
                  <span className="inline">{item.category}</span>
                </div>

                <div className="font-bold">
                  <span className="text-black">{item.score}</span>
                  <span className="text-gray-400"> /100</span>
                </div>
              </div>
            </div>
          ))}
          <div className="row pt-3">
            <button className=" bg-sky-900 px-12 text-white py-3 text-xl rounded-full hover:bg-blue-600">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
