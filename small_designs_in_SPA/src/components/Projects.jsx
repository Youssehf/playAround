import React from "react";
import { Link } from "react-router-dom";
export const Projects = () => {
  return (
    <div className="container">
      {[["Result", "/result", 1]].map(([title, url, id]) => (
        <Link
          key={id}
          to={url}
          className="rounded-lg px-3 py-2 text-slate-700 no-underline font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {title}
        </Link>
      ))}
    </div>
  );
};
