"use client";

import { CgSmile } from "react-icons/cg";

export const Empty: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="pr-8">
        <CgSmile size={50} />
      </div>
      <h1> Create Account </h1>
    </div>
  );
};
