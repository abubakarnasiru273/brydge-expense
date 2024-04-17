"use client";

import { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between ">
      <div>
        <h1 className="text-black-600 text-2xl">Expense</h1>
      </div>

      <div>
        <button className=" text-white p-4 rounded-xl mr-4 rounded-full bg-zinc-950 ">
          Sign Up
        </button>
        <button> Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
