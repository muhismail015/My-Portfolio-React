import React from "react";

const NavTitle = ({ title }) => {
  return (
    <h4 className="font-bold text-slate-200 uppercase mb-3">
      <span className="border-b">{title}</span>
    </h4>
  );
};

export default NavTitle;
