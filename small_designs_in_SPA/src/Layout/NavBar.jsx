import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="flex bg-emerald-300 sm:justify-center space-x-4">
        {[
          ["Home", "/home", 1],
          ["Team", "/team", 2],
          ["Projects", "/projects", 3],
        ].map(([title, url, id]) => (
          <Link
            key={id}
            to={url}
            className="rounded-lg px-3 py-2 text-slate-700 no-underline font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  );
};
