import React from 'react';

export const Footer = () => {
  return (
    <footer className=" bg-emerald-300 py-4 text-center">
      <div className="container mx-auto  font-medium ">
        <p className="text-slate-700">
          &copy; {new Date().getFullYear()} Youssef Sayed ❤. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
